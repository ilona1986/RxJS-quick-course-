import {of} from 'rxjs';

const stream = of(1, 2 , 3,4);

stream.subscribe(value => {
    console.log('value', value)
})