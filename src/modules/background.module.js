//#region Import
import { RANDOM_HEX_BG } from '../globals';
import { random } from '../utils';
import { Module } from '../core/module';
//#endregion

export class BackgroundModule extends Module {
  trigger() {
    const rndIndex = random(0, RANDOM_HEX_BG.length - 1);
    document.body.style.background = RANDOM_HEX_BG[rndIndex];
  }
}
