import { Module } from '../core/module';

export class ShapeModule extends Module {
  trigger() {

    const figures = ['circle', 'square', 'triangle', 'cross', 'frame', 'star', 'arrow'];

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      };
      return color;
    };

    function getRandomNumber(min, max) {
      return Math.round(Math.random() * (max - min + 1) + min);
    };

    function setColor(element) {
      const color1 = getRandomColor();
      const color2 = getRandomColor();
      element.style.background = `linear-gradient(${color1}, ${color2})`;
    };

    const createRandomShape = ((shapeName) => {  

      const getScreenSize = document.querySelector('body');
      const shape = document.createElement('div');
      const {width, height} = getScreenSize.getBoundingClientRect();
      const size = getRandomNumber(100, 300);
      const y = getRandomNumber(0, width - size);
      const x = getRandomNumber(0, height - size);
      
      shape.classList.add(shapeName);
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.top = `${x}px`;
      shape.style.left = `${y}px`;
      shape.style.transform = `rotate(${getRandomNumber(0, 360)}deg)`;
      shape.backgroundColor = setColor(shape);
      document.body.append(shape);
    });

    createRandomShape(figures[getRandomNumber(0, 6)]);
  };
};