import  {Subject, BehaviorSubject, ReplaySubject} from "rxjs";

document.addEventListener('click', () => {
//     const stream = new Subject()
//     stream.subscribe(v => console.log('value:', v))
//
//     stream.next('Hello')
//     stream.next('Rx')
//     stream.next('JS')
// })

//     const stream = new BehaviorSubject('Oh')
//     stream.subscribe(v => console.log('value:', v))
//
//     stream.next('Hello')
//     stream.next('Rx')
//     stream.next('JS')
// })

    const stream = new ReplaySubject()
    stream.subscribe(v => console.log('value:', v))

    stream.next('Hello')
    stream.next('Rx')
    stream.next('JS')
})