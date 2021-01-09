const Rx = require('rxjs/Rx')

const myObservable = Rx.Observable.create((observer) => {
  observer.next('111')
  setTimeout(() => {
      observer.next('777')
  }, 3000)
})

myObservable.subscribe((text) => console.log(text));

