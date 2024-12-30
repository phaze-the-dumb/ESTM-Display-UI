import { LoaderAnim } from "./anims/loader.anim"
import { WaitingAnim } from "./anims/waiting.anim";
import { NextUpAnim } from "./anims/nextup.anim";
import { BlackoutAnim } from "./anims/blackout.anim";

import { Anim } from "./animation";

import { testAuth } from "./auth";

import * as cooki from './managers/CookiManager';

import './style.css';

// Create the global "endpoint" constant
declare global{
  interface Window{
    ENDPOINT: string;
    WS_ENDPOINT: string;
  }
}

window.WS_ENDPOINT = 'ws://127.0.0.1:8080';
window.ENDPOINT = 'http://127.0.0.1:8080'; // Set the endpoint value to the backend url ( Leave blank in prod builds so it uses the base url of the site)

let sleep = ( time: number ): Promise<void> => {
  return new Promise(res => {
    setTimeout(res, time);
  });
}

// enum AnimationState{
//   WAITING,
//   NEXT_UP,
//   INGAME
// }

// let state = AnimationState.WAITING;
let activeAnimations: Array<Anim> = [];

let currentBracket: any;
let nextBracket: any;

let blackout = new BlackoutAnim();

let nextBracketLoaded = false;
let currentBracketLoaded = false;

let winningBracket = -1;
let callWinnerOnNextBracketUpdate = false;

export let startRender = async ( el: HTMLElement ) => {
  blackout.load(el);

  let loader = new LoaderAnim();
  loader.load(el);

  await sleep(1500);
  await testAuth();

  let ws = new WebSocket(window.WS_ENDPOINT + '/api/v1/live');

  ws.onopen = () => {
    console.log('Connected to backend');
    ws.send(JSON.stringify({ type: 'auth', token: cooki.getStore('token') }));
  }

  loader.unload();
  await sleep(1000);

  let waitingAnim = new WaitingAnim();
  waitingAnim.load(el);

  activeAnimations.push(waitingAnim);

  ws.onmessage = ( msg ) => {
    let json = JSON.parse(msg.data);
    console.log(json);

    switch(json.type){
      case 'start-match':
        updateMatchPlayingStatus(true);
        break;
      case 'cancel-match':
        updateMatchPlayingStatus(false);
        break;
      case 'next-bracket':
        nextBracketLoaded = true;
        nextBracket = json.bracket;

        if(currentBracketLoaded)bracketUpdate();
        if(callWinnerOnNextBracketUpdate)winner();

        break;
      case 'current-bracket':
        currentBracketLoaded = true;
        currentBracket = json.bracket;

        if(nextBracketLoaded)bracketUpdate();
        break;
      case 'win-bracket':
        winner();
        break;
    }
  }

  fetch(window.ENDPOINT + '/api/v1/brackets/current', {
    headers: {
      Authorization: `Bearer ${cooki.getStore('token')}`
    }
  })
    .then(data => data.json())
    .then(data => {
      if(!data.ok){
        return;
      }

      winningBracket = data.current[2];

      currentBracket = { team1: data.current[0], team2: data.current[1] };
      nextBracket = { team1: data.next[0], team2: data.next[1] };

      if(currentBracket.team1 && currentBracket.team2){
        blackout.unload();
        activeAnimations.forEach(a => a.unload());

        if(winningBracket)
          winner();
      } else{
        updateMatchPlayingStatus(true);
      }
    })
}

let updateMatchPlayingStatus = async ( playing: boolean ) => {
  if(playing){
    activeAnimations.forEach(a => a.unload());
    activeAnimations = [];

    // state =  AnimationState.NEXT_UP;
    await sleep(250);

    let nextupanim = new NextUpAnim(nextBracket);
    nextupanim.load(document.body);

    activeAnimations.push(nextupanim);
  } else{
    activeAnimations.forEach(a => a.unload());
    activeAnimations = [];

    blackout = new BlackoutAnim();
    blackout.load(document.body);

    let waitingAnim = new WaitingAnim();
    waitingAnim.load(document.body);

    activeAnimations.push(waitingAnim);
  }
}

let bracketUpdate = () => {
  currentBracketLoaded = false;
  nextBracketLoaded = false;

  console.log(nextBracket, currentBracket);

  if(currentBracket.team1 && currentBracket.team2){
    blackout.unload();
    activeAnimations.forEach(a => a.unload());
  }
}

let winner = () => {
  callWinnerOnNextBracketUpdate = false;
  if(!nextBracket.team1)return callWinnerOnNextBracketUpdate = true;

  blackout = new BlackoutAnim();
  blackout.load(document.body);

  activeAnimations.forEach(a => a.unload());
  updateMatchPlayingStatus(true);
}

window.onload = () => {
  startRender(document.body);
};