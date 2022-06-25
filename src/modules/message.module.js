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
    let randomId = random(0, messages.length);
    const toast = createTag(
      'div',
      messages[randomId],
      {
        style:
          'position:absolute; bottom:20px; right:20px; border:1px solid #ccc; border-radius:4px; padding:15px;',
      },
      document.body
    );
    setTimeout(() => toast.remove(), 3000);
  }
}
