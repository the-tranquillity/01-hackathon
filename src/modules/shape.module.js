import { Module } from '../core/module';
import { random, getRandomHexColor, createTag } from '../utils';

export class ShapeModule extends Module {
  trigger() {
    const figures = [
      'circle',
      'square',
      'triangle',
      'cross',
      'frame',
      'star',
      'arrow',
    ];

    function setColor(element) {
      const color1 = getRandomHexColor();
      const color2 = getRandomHexColor();
      element.style.background = `linear-gradient(${color1}, ${color2})`;
    }

    const createRandomShape = (shapeName) => {
      console.log('shna', shapeName);
      const windowInnerWidth = document.body.clientWidth;
      const windowInnerHeight = document.body.clientHeight;
      const size = random(100, 300);
      const x = random(0, windowInnerHeight - size * 2);
      const y = random(0, windowInnerWidth - size * 2);

      const wrapper = document.createElement('div');
      wrapper.className = 'module-shape__wrapper';
      wrapper.style.position = 'absolute';
      wrapper.style.filter = `drop-shadow(10px 10px 15px #00000099)`;
      wrapper.style.top = `${x}px`;
      wrapper.style.left = `${y}px`;
      console.log('x', x, 'y', y);
      console.log('wst', wrapper.style.top);

      wrapper.style.height = 'fit-content';
      wrapper.style.width = 'fit-content';
      const shape = document.createElement('div');

      shape.classList.add(shapeName);
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
      shape.style.transform = `rotate(${random(0, 360)}deg)`;
      shape.backgroundColor = setColor(shape);
      wrapper.append(shape);
      document.body.append(wrapper);
    };

    createRandomShape(figures[random(0, 6)]);
  }
}
