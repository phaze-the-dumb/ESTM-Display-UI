import { Anim } from "../animation";

export class LoaderAnim extends Anim{
  constructor(){
    super();

    this.add()
      .start({
        background: '#fff',
        translateX: '-50%',
        translateY: '-50%',
        top: window.innerHeight + 500 + 'px',
        left: 'calc(50% - 500px)',
        width: '100px',
        height: '600px',
        rotate: '45deg'
      })
      .anime({
        top: '50%',
        left: 'calc(50% - 100px)',
      })
      .unload(x => {
        x
          .anime({
            easing: 'easeInQuad',
            delay: 500,
            duration: 250,
            height: '0px',
            complete: () => x.done()
          })
      })

    this.add()
      .start({
        background: '#fff',
        translateX: '-50%',
        translateY: '-50%',
        top: window.innerHeight - 500 + 'px',
        left: 'calc(50% + 300px)',
        width: '100px',
        height: '600px',
        rotate: '45deg'
      })
      .anime({
        top: '50%',
        left: 'calc(50% + 100px)',
      })
      .unload(x => {
        x
          .anime({
            easing: 'easeInQuad',
            delay: 400,
            duration: 250,
            height: '0px',
            complete: () => x.done()
          })
      })

    this.add()
      .start({
        background: '#000',
        translateX: '-50%',
        translateY: '-50%',
        top: '50%',
        left: 'calc(50% - 400px)',
        width: '0px',
        height: '250px'
      })
      .anime({
        delay: 200,
        width: '800px',
        left: '50%'
      })
      .unload(x => {
        x
          .anime({
            easing: 'easeInQuad',
            delay: 200,
            duration: 250,
            background: '#000',
            height: '0px',
            complete: () => x.done()
          })
      })

    this.add()
      .start({
        color: '#0000',
        background: '#fff',
        translateX: '-50%',
        translateY: '-50%',
        top: '50%',
        left: 'calc(50% - 400px)',
        width: '0px',
        height: '230px',
        'font-size': '200px',
        'text-align': 'center',
        'font-weight': 'bold'
      })
      .anime({
        delay: 500,
        color: '#000',
        width: '780px',
        left: '50%'
      })
      .text('ESTM')
      .unload(x => {
        x
          .text('')
          .anime({
            easing: 'easeInQuad',
            delay: 150,
            duration: 250,
            background: '#000',
            height: '0px',
            complete: () => x.done()
          })
      });

    this.add()
      .start({
        background: '#000',
        translateX: '-50%',
        translateY: '-50%',
        top: 'calc(50% + 350px)',
        left: 'calc(50% - 50px)',
        width: '20px',
        height: '20px',
        'border-radius': '50%'
      })
      .anime({
        delay: 550,
        background: '#fff'
      })
      .unload(x => {
        x
          .anime({
            delay: 0,
            background: '#000',
            complete: () => x.done()
          })
      })

    this.add()
      .start({
        background: '#000',
        translateX: '-50%',
        translateY: '-50%',
        top: 'calc(50% + 350px)',
        left: '50%',
        width: '20px',
        height: '20px',
        'border-radius': '50%'
      })
      .anime({
        delay: 600,
        background: '#fff'
      })
      .unload(x => {
        x
          .anime({
            delay: 50,
            background: '#000',
            complete: () => x.done()
          })
      })

    this.add()
      .start({
        background: '#000',
        translateX: '-50%',
        translateY: '-50%',
        top: 'calc(50% + 350px)',
        left: 'calc(50% + 50px)',
        width: '20px',
        height: '20px',
        'border-radius': '50%'
      })
      .anime({
        delay: 650,
        background: '#fff'
      })
      .unload(x => {
        x
          .anime({
            delay: 100,
            background: '#000',
            complete: () => x.done()
          })
      })
  }
}