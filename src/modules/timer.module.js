//#region Import
import { Module } from '../core/module';
import { createTag } from '../utils';
import { TIMER_ELEMENTS, MODAL_ELEMENTS } from '../globals';
//#endregion

export class TimerModule extends Module {
  trigger() {
    //#region DOM & vars
    let isWorking = true;

    const modalDom = {};
    // prettier-ignore
    MODAL_ELEMENTS.forEach((e) => (modalDom[e.name] = createTag(
     e.tag, e.content, e.attr, e.parent ? document.body : null)));
    modalDom.container.classList.add('flex', 'items-center', 'justify-center');
    modalDom.modal.append(modalDom.container);
    modalDom.container.append(modalDom.close);
    modalDom.checkbox.checked = true;
    modalDom.close.onclick = quit;

    const timerDom = {};
    // prettier-ignore
    const timerLabel = createTag('label','',
    { class: 'input-group input-group-md' })
    // prettier-ignore
    TIMER_ELEMENTS.forEach((e) => (timerDom[e.name] = createTag(
      e.tag, e.content, e.attr, e.parent === 'form' 
      ? timerLabel : null
    )));
    //innerHTML;
    timerDom.form.append(timerLabel);
    modalDom.container.append(timerDom.form, timerDom.shower);
    // prettier-ignore

    console.log('timerDom.shower',timerDom.shower)
    timerDom.shower.innerHTML = `
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span data-timer="hr" style="--value:10;"></span>
      </span>
      hours
    </div> 
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span data-timer="min" style="--value:24;"></span>
      </span>
      min
    </div> 
    <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
      <span class="countdown font-mono text-5xl">
        <span data-timer="sec" style="--value:7;"></span>
      </span>
      sec
    </div>`;
    timerDom.hrValue = timerDom.shower.querySelector('[data-timer="hr"]');
    timerDom.minValue = timerDom.shower.querySelector('[data-timer="min"]');
    timerDom.secValue = timerDom.shower.querySelector('[data-timer="sec"]');

    //#region Listners
    timerDom.form.addEventListener('submit', timerSubmitHandle);
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
      [
        timerDom.submit,
        timerDom.sec,
        timerDom.min,
        timerDom.hr,
        timerDom.lsec,
        timerDom.lmin,
        timerDom.lhr,
      ].forEach((e) => e.remove());
      timerDom.shower.classList.toggle('hidden');
      timerTickHandler(stamp, checkWorking);
    }

    function timerTickHandler(seconds, checkWorking) {
      if (!seconds)
        timerDom.shower.innerHTML =
          '<h3 class="text-lg font-bold text-primary-content">Time is up!</h3>';
      //timerDom.shower.textContent = 'Time is up!';
      if (!seconds || !checkWorking()) {
        quit();
        return;
      }
      //console.log('tick');
      let hr = Math.floor(seconds / 3600);
      hr = hr < 10 ? `0${hr}` : hr;
      let min = Math.floor(seconds / 60 - Math.floor(seconds / 3600) * 60);
      min = min < 10 ? `0${min}` : min;
      let sec = Math.floor(seconds - Math.floor(seconds / 60) * 60);
      sec = sec < 10 ? `0${sec}` : sec;
      //timerDom.shower.textContent = `${hr}:${min}:${sec}`;
      timerDom.hrValue.setAttribute('style', `--value:${hr}`);
      timerDom.minValue.setAttribute('style', `--value:${min}`);
      timerDom.secValue.setAttribute('style', `--value:${sec}`);
      //timerDom.hrValue timerDom.minValue timerDom.secValue mssg.setAttribute('style', 'color: green;');
      setTimeout(timerTickHandler, 1000, seconds - 1, checkWorking);
    }
    function quit() {
      isWorking = false;
      // prettier-ignore
      setTimeout(() => {
        [modalDom.modal, modalDom.checkbox, modalDom.label].forEach((e) => e.remove())  
      }, 1400);
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
