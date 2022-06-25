import { Module } from '../core/module';
import { createTag } from '../utils';

export class TimerModule extends Module {
  trigger() {
    console.log('trigger TimerModule init');
    const timer = createTag(
      'div',
      counter,
      {
        style:
          'position:absolute; bottom:20px; right:20px; border:1px solid #ccc; border-radius:4px; padding:15px; display:flex; align-items:center; justify-content:center;',
      },
      document.body
    );
    const counter = createTag('span', '5', {}, timer);

    let num = +counter.textContent;

    const myInterval = setInterval(myTimer, 1000);

    function myTimer() {
      num--;
      counter.textContent = num;
    }

    function myStopFunction() {
      clearInterval(myInterval);
    }

    setTimeout(() => {
      myStopFunction();
      counter.textContent = 'Удаляюсь';
      setTimeout(() => {
        timer.remove();
      }, 2000);
    }, 5000);
  }
}
