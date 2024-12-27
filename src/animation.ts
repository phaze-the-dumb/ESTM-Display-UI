import anime, { AnimeParams } from "animejs";

export class Anim{
  private _divs: AnimDiv[] = [];

  constructor(){}

  public add(): AnimDiv{
    let div = new AnimDiv(document.createElement('div'));
    this._divs.push(div);

    return div;
  }

  public load( parent: HTMLElement ){
    this._divs.forEach(div => div.load(parent));
  }

  public unload(){
    this._divs.forEach(div => div.unload());
  }
}

export class AnimDiv{
  private _div: any;
  private _onUnload: ( x: AnimDiv ) => void = () => {};

  constructor( div: HTMLElement ){
    this._div = div;

    this._div.style.position = 'fixed';
  }

  public unload( cb?: ( x: AnimDiv ) => void ){
    if(cb){
      this._onUnload = cb;
    } else{
      this._onUnload(this);
    }
  }

  public load( parent: HTMLElement ){
    parent.appendChild(this._div)
  }

  public start( options: AnimeParams ){
    anime.set(this._div, options);

    return this;
  }

  public anime( options: AnimeParams ){
    anime({ targets: this._div, ...options });

    return this;
  }

  public text( text: string ){
    this._div.innerHTML = text;

    return this;
  }

  public done(){
    this._div.remove();
  }
}