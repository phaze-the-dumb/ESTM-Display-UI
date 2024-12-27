import { Anim } from "../animation";

export class BlackoutAnim extends Anim{
  constructor(){
    super();

    this.add()
      .start({
        background: '#000',
        translateX: '-50%',
        translateY: '-50%',
        top: '50%',
        left: '25%',
        width: window.innerHeight + 500 + 'px',
        height: window.innerWidth + 500 + 'px',
        rotate: '30deg',
        opacity: 0
      })
      .anime({
        easing: 'easeInQuad',
        duration: 250,
        opacity: 1
      })
      .unload(x => 
        x
          .anime({
            duration: 250,
            top: '-50%',
            left: '-50%',
            easing: 'easeInQuad',
            complete: () => x.done()
          }))

    this.add()
      .start({
        background: '#000',
        translateX: '-50%',
        translateY: '-50%',
        top: '50%',
        left: '75%',
        width: window.innerHeight + 500 + 'px',
        height: window.innerWidth + 500 + 'px',
        rotate: '-30deg',
        opacity: 0
      })
      .anime({
        easing: 'easeInQuad',
        duration: 250,
        opacity: 1
      })
      .unload(x => 
        x
          .anime({
            duration: 250,
            top: '-50%',
            left: '150%',
            easing: 'easeInQuad',
            complete: () => x.done()
          }))
  }
}