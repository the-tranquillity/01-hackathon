//#region Import
import { Module } from '../core/module';
import { createTag } from '../utils';
import { timerElements } from '../globals';
//#endregion

export class TimerModule extends Module {
  trigger() {
    //#region DOM & vars
    let isWorking = true;
    // prettier-ignore
    const container = createTag('div','',
    { class: 'timer-container' }, document.body)

    const dom = {};
    // prettier-ignore
    timerElements.forEach((e) => (dom[e.name] = createTag(
          e.tag, e.content, e.attr, e.parent === 'cont' 
          ? container : container.querySelector('form')
        ))
    );
    dom.cancel.onclick = quit;
    //#endregion

    //#region Listners
    dom.form.addEventListener('submit', timerSubmitHandle);
    //#endregion

    //#region Functions
    function timerSubmitHandle(event) {
      event.preventDefault();
      const { target } = event;
      const formTime = [];
      [...target]
        .filter((e) => e.type === 'number')
        .map((e) => +e.value)
        .forEach((e) => formTime.push(e));

      if (formTime.every((e) => !e)) {
        console.log('time should not be zero');
        return;
      }
      const stamp = formTime[0] * 3600 + formTime[1] * 60 + formTime[2];
      [dom.submit, dom.sec, dom.min, dom.hr].forEach((e) => e.remove());
      dom.shower.classList.toggle('hidden');
      timerTickHandler(stamp, checkWorking);
    }

    function timerTickHandler(seconds, checkWorking) {
      if (!seconds) dom.shower.textContent = 'Time is up!';
      if (!seconds || !checkWorking()) {
        quit();
        return;
      }
      console.log('tick');
      let hr = Math.floor(seconds / 3600);
      hr = hr < 10 ? `0${hr}` : hr;
      let min = Math.floor(seconds / 60 - Math.floor(seconds / 3600) * 60);
      min = min < 10 ? `0${min}` : min;
      let sec = Math.floor(seconds - Math.floor(seconds / 60) * 60);
      sec = sec < 10 ? `0${sec}` : sec;
      dom.shower.textContent = `${hr}:${min}:${sec}`;

      setTimeout(timerTickHandler, 1000, seconds - 1, checkWorking);
    }
    function quit() {
      isWorking = false;
      setTimeout(() => container.remove(), 1400);
    }

    function checkWorking() {
      return isWorking ? true : false;
    }
    //#endregion
    /*
    Коллбэк checkWorking и isWorking нужны для того,
    чтобы кнопка отмены прекращала работу функции timerTickHandler
    */
  }
}
