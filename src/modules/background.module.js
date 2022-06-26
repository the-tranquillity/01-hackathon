//#region Import
import { RANDOM_HEX_BG, RANDOM_HEX_BG_DARK } from '../globals';
import { random } from '../utils';
import { Module } from '../core/module';
//#endregion

export class BackgroundModule extends Module {
  trigger() {
    const theme =
      document.querySelector('html').dataset.theme === 'dark'
        ? RANDOM_HEX_BG_DARK
        : RANDOM_HEX_BG;
    const rndIndex = random(0, theme.length - 1);
    document.body.style.background = theme[rndIndex];
  }
}
