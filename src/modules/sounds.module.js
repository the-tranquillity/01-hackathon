//#region Import
import { random } from '../utils';
import { Module } from '../core/module';
//#endregion

export class SoundsModule extends Module {
  trigger() {
    const sounds = ['car', 'mech', 'nota', 'cat', 'guitar', 'sms', 'vk'];
    const number = random(0, 6);
    const sound = sounds[number];
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = `src/assets/audio/${sound}.mp3`;
    audio.play();
  }
}
