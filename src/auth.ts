import * as cooki from './managers/CookiManager';

let tryNewAuth = ( res: () => void, rej: () => void ) => {
  let url = new URL(window.location.href);
  let code = url.searchParams.get('code');

  if(!code)return rej();
  fetch(window.ENDPOINT + '/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ code })
  })
    .then(data => data.json())
    .then(data => {
      if(!data.ok){
        return rej();
      }

      cooki.setStore('token', data.token);
      cooki.setStore('token-id', data.id);

      res();
    })
    .catch(e => {
      console.log(e);
      rej();
    });
}

export let testAuth = (): Promise<void> => {
  return new Promise(( res, rej ) => {
    console.log('Attempting to auth');

    let token = cooki.getStore('token');
    if(token){
      fetch(window.ENDPOINT + '/api/v1/auth/verify', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
        .then(data => data.json())
        .then(data => {
          if(!data.ok){
            cooki.tryRemoveStore('token');
            cooki.tryRemoveStore('token-id');

            tryNewAuth(res, rej);
            return;
          }

          res();
        })
        .catch(e => {
          console.log(e);
          rej();
        })
    } else{
      tryNewAuth(res, rej);
    }
  })
}