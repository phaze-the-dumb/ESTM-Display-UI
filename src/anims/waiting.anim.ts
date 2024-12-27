import { Anim } from "../animation";

export class WaitingAnim extends Anim{
  constructor(){
    super();

    this.add()
      .text("Waiting...")
      .start({
        color: '#fff',
        opacity: 0,
        translateX: '-50%',
        translateY: '-50%',
        top: '50%',
        left: '50%',
        width: '800px',
        height: '120px',
        'font-size': '100px',
        'font-weight': '800',
        'text-align': 'center'
      })
      .anime({
        easing: 'easeInQuad',
        duration: 250,
        opacity: 1,
      })
      .unload(x => {
        x
          .anime({
            easing: 'easeInQuad',
            duration: 250,
            opacity: 0,
            complete: () => x.done()
          })
      })
  }
}