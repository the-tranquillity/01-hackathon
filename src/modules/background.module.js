import { Module } from '../core/module';
import { randomColor } from '../utils';
export class BackgroundModule extends Module {
  trigger() {
    console.log('trigger BackgroundModule init');
    document.body.style.backgroundColor = randomColor();
  }
}
