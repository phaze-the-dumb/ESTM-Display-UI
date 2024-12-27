import { Anim } from "../animation";

export class NextUpAnim extends Anim{
  constructor( nextBracket: any ){
    super();

    this.add()
      .start({
        background: '#fff5',
        translateX: '-50%',
        translateY: '-50%',
        top: '50%',
        left: '50%',
        width: '0px',
        height: '400%',
        rotate: '20deg',
        'box-shadow': '#000 0 0 25px'
      })
      .anime({
        duration: 1000,
        delay: 1100,
        width: '500px'
      })
      .anime({
        duration: 250,
        delay: 1500,
        rotate: '90deg'
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

    this.add()
      .start({
        background: '#fff',
        translateX: '-50%',
        translateY: '-50%',
        top: '50%',
        left: '50%',
        width: '0px',
        height: '400%',
        rotate: '20deg'
      })
      .anime({
        duration: 500,
        delay: 1000,
        width: '100px'
      })
      .anime({
        duration: 250,
        delay: 1500,
        rotate: '90deg',
        width: '250px'
      })
      .unload(x => {
        x
          .anime({
            easing: 'easeInQuad',
            duration: 250,
            rotate: '0deg'
          })
          .anime({
            easing: 'easeInQuad',
            delay: 250,
            duration: 250,
            height: '100%',
            width: '100%',
            opacity: 0,
            complete: () => x.done()
          })
      })

    this.add()
      .start({
        background: '#000c',
        translateX: '-50%',
        translateY: '-50%',
        top: '50%',
        left: '80%',
        width: '0px',
        height: '100%',
        // 'backdrop-filter': 'blur(10px)',
        'box-shadow': '#000 0 0 25px'
      })
      .anime({
        duration: 750,
        delay: 1500,
        width: '500px'
      })
      .unload(x => {
        x
          .anime({
            easing: 'easeInQuad',
            duration: 250,
            top: '-100%',
            complete: () => x.done()
          })
      })

    this.add()
      .start({
        background: '#000c',
        translateX: '-50%',
        translateY: '-50%',
        top: '50%',
        left: '20%',
        width: '0px',
        height: '100%',
        // 'backdrop-filter': 'blur(10px)',
        'box-shadow': '#000 0 0 25px'
      })
      .anime({
        duration: 750,
        delay: 1500,
        width: '500px'
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

    // Team 1
    this.add()
      .text(nextBracket.team1.name)
      .start({
        translateX: '-50%',
        translateY: '-50%',
        top: 'calc(50% - 200px)',
        left: '20%',
        width: '500px',
        height: '100px',
        scale: 0,
        'font-size': '100px',
        'font-weight': 'bold',
        'text-align': 'center',
        color: nextBracket.team1.colour
      })
      .anime({
        duration: 1000,
        delay: 0,
        scale: 1
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

    nextBracket.team1.players.forEach(( player: any, i: number ) => {
      this.add()
        .text(player.name)
        .start({
          translateX: '-50%',
          translateY: '-50%',
          top: `calc(50% - ${ 100 - i * 60 }px)`,
          left: '20%',
          width: '500px',
          height: '50px',
          scale: 0,
          'font-size': '50px',
          'font-weight': 'bold',
          'text-align': 'center',
          color: nextBracket.team1.colour
        })
        .anime({
          duration: 1000,
          delay: 100 * i + 100,
          scale: 1
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
    })

    // VS
    this.add()
      .text('VS')
      .start({
        color: '#000',
        translateX: '-50%',
        translateY: '-50%',
        top: 'calc(50% - 25px)',
        left: '50%',
        width: '500px',
        height: '250px',
        scale: 0,
        'font-size': '250px',
        'font-weight': 'bold',
        'text-align': 'center',
        'font-family': 'impact'
      })
      .anime({
        duration: 1000,
        delay: 250,
        scale: 1
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

    // Team 2
    this.add()
      .text(nextBracket.team2.name)
      .start({
        translateX: '-50%',
        translateY: '-50%',
        top: 'calc(50% - 200px)',
        left: '80%',
        width: '500px',
        height: '100px',
        scale: 0,
        'font-size': '100px',
        'font-weight': 'bold',
        'text-align': 'center',
        color: nextBracket.team2.colour
      })
      .anime({
        duration: 1000,
        delay: 500,
        scale: 1
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

    nextBracket.team2.players.forEach(( player: any, i: number ) => {
      this.add()
        .text(player.name)
        .start({
          translateX: '-50%',
          translateY: '-50%',
          top: `calc(50% - ${ 100 - i * 60 }px)`,
          left: '80%',
          width: '500px',
          height: '50px',
          scale: 0,
          'font-size': '50px',
          'font-weight': 'bold',
          'text-align': 'center',
          color: nextBracket.team2.colour
        })
        .anime({
          duration: 1000,
          delay: 100 * i + 600,
          scale: 1
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
    })
  }
}