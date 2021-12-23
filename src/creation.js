import {of, from} from 'rxjs';
import {scan} from 'rxjs/operators';

// const stream = of(1, 2 , 3,4);
//
// stream.subscribe(value => {
//     console.log('value', value)
// })

const arr = from([1, 2, 3, 4, 5, 6]).pipe(
    scan((acc, value) => acc.concat(value), [])
)

arr.subscribe(value => console.log('value', value));