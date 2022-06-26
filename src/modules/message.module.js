import { Module } from '../core/module';
import { createTag, random } from '../utils';

export class MessageModule extends Module {
  trigger() {
    console.log('trigger MessageModule init');
    const messages = [
      'Lorem ipsum dolor sit amet',
      'Curabitur tincidunt non orci quis aliquet.',
      'Etiam fermentum nibh eu augue eleifend congue.',
      'Aenean hendrerit molestie tempor. Nam molestie, ex vel bibendum consectetur',
      'Vivamus commodo rhoncus metus.',
      'Vel semper nulla ornare vel. Aliquam id velit vitae mauris tempus',
      'Auctor sed sit amet est. Cras vehicula.',
      'Nisl quis semper fringilla, arcu libero fringilla metus',
      'At blandit enim dolor sagittis felis. Donec nibh enim, facilisis',
      'Nec tortor quis, efficitur ultricies ex. Nulla id lobortis libero.',
    ];
    let randomId = random(0, messages.length - 1);
    const toast = createTag('div', '', {
      style: 'position:absolute; bottom:20px; right:20px',
      class: 'alert alert-info shadow-lg bg-primary-content w-auto',
    });
    toast.innerHTML = `<div>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9
    9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span>${messages[randomId]}</span></div>`;
    document.body.append(toast);
    setTimeout(() => toast.remove(), 3000);
  }
}
