import { Module } from '../core/module';

function getRandomColor () {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export class BackgroundModule extends Module {
  trigger() {
    document.body.style.background = getRandomColor();
    console.log('trigger BackgroundModule');
  }
}
