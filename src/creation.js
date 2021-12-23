import {of, from, Observable} from 'rxjs';
import {scan} from 'rxjs/operators';

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

const stream = new Observable(observer => {

    observer.next('first value')

    setTimeout(() => observer.next('After 1000ms'), 1000)

    setTimeout(() => observer.complete(), 1500),

    setTimeout(() => observer.error('Something went wrong'), 2000)

    setTimeout(() => observer.next('After 3000ms'), 3000)
})

//#1
// stream.subscribe(
//     (value)=> console.log('value', value),
//     (error) => console.log(error),
//     () => console.log('Complete')
//     )

stream.subscribe({
    next(value) {
        console.log(value)
    },
    error(error) {
        console.log(error)
    },
    complete() {
        console.log('complete')
    }
})