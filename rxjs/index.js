const Rx = require('rxjs/Rx')

// const myObservable = Rx.Observable.create((observer) => {
//   observer.next('111')
//   setTimeout(() => {
//       observer.next('777')
//   }, 3000)
// })

// myObservable.subscribe((text) => console.log(text));

var subscriber = function (observer) { // 创建了一位渔人
  observer.next('fish1');
  observer.next('fish2');
  observer.complete();
}
var observer1 = { // 来了一位饥民1
  next: function (value) {
    console.log(`我接到鱼${value}啦，不会挨饿咯`);
  },
  error: function (error) {
    console.log(`哎，捕到的鱼因为${error}原因不能吃`)
  },
  complete: function () {
    console.log('今天的鱼发完了')
  }
}

var source = Rx.Observable.create(subscriber); // 河流中来了一名渔人，他在河流中放下捕鱼的竹筒。
subscription = source.subscribe(observer1); // 竹筒被饥民1关注后，饥民1可以收到渔人扔出的鱼了。
setTimeout(() => {
  subscription.unsubscribe(); // 3秒后饥民退订了竹筒，给其他饥民机会。
}, 3000);
