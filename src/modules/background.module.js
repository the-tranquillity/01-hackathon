import { Module } from '../core/module';

console.log('123')
console.log('hello')

export class BackgroundModule extends Module {
  trigger() {
    console.log('trigger BackgroundModule');
  }
}
