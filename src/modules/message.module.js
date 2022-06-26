import { Module } from '../core/module';
import { createTag, random } from '../utils';
import { MOD_MSG_MESSAGES, TOAST_DURATION } from '../globals';

export class MessageModule extends Module {
  trigger() {
    console.log('trigger MessageModule init');
    let randomId = random(0, MOD_MSG_MESSAGES.length - 1);

    document.documentElement.style.setProperty(
      '--ani-duration',
      `${TOAST_DURATION}ms`
    );
    const toast = createTag('div', '', {
      style: 'position:absolute; bottom:20px; right:20px',
      class: 'alert alert-info shadow-lg bg-primary-content w-auto',
    });
    toast.innerHTML = `<div class='alert-progress bg-info'></div><div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9
    9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>${MOD_MSG_MESSAGES[randomId]}</span></div>`;
    document.body.append(toast);
    setTimeout(() => toast.remove(), TOAST_DURATION);
  }
}
