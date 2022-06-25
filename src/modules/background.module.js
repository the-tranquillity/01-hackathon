import { getRandomColor } from '../utils'
import { Module } from '../core/module';



export class BackgroundModule extends Module {
  trigger() {
    document.body.style.background = getRandomColor();
    console.log('trigger BackgroundModule');
  }
}
