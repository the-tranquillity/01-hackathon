//#region Import
import { getRandomHexColor } from '../utils';
import { Module } from '../core/module';
//#endregion

export class BackgroundModule extends Module {
  trigger() {
    document.body.style.background = getRandomHexColor();
  }
}
