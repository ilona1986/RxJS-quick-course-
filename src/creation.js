import {of, from, Observable, fromEvent} from 'rxjs';
import {scan, map} from 'rxjs/operators';

// const stream = of(1, 2 , 3,4);
//
// stream.subscribe(value => {
//     console.log('value', value)
// })

// const arr = from([1, 2, 3, 4, 5, 6]).pipe(
//     scan((acc, value) => acc.concat(value), [])
// )
//
// arr.subscribe(value => console.log('value', value));

// const stream = new Observable(observer => {
//
//     observer.next('first value')
//
//     setTimeout(() => observer.next('After 1000ms'), 1000)
//
//     setTimeout(() => observer.complete(), 1500),
//
//     setTimeout(() => observer.error('Something went wrong'), 2000)
//
//     setTimeout(() => observer.next('After 3000ms'), 3000)
// })

//#1
// stream.subscribe(
//     (value)=> console.log('value', value),
//     (error) => console.log(error),
//     () => console.log('Complete')
//     )

//#2
// stream.subscribe({
//     next(value) {
//         console.log(value)
//     },
//     error(error) {
//         console.log(error)
//     },
//     complete() {
//         console.log('complete')
//     }
// })

fromEvent(document.querySelector('canvas'), 'mousemove')
    .pipe(
        map(event =>({
            x: event.offsetX,
            y: event.offsetY,
            ctx: event.target.getContext('2d')
        }))
    )
    .subscribe(position => {
      position.ctx.fillRect(position.x, position.y, 2, 2)
})

const clear = fromEvent(document.getElementById('clear'),'click')

clear.subscribe(() => {
    const canvas = document.querySelector('canvas')
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
})


