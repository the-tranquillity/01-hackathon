import { Module } from '../core/module';
import { random, randomColor, createTag } from '../utils';

export class ShapeModule extends Module {
  trigger() {
    console.log('trigger ShapeModule init');

    const randomY = random(60, document.body.clientHeight - 60);
    const randomX = random(60, document.body.clientWidth - 60);
    const preSize = random(15, 80);
    const randomSize = preSize % 2 === 0 ? preSize / 2 : (preSize - 1) / 2;
    const isCircle = random(0, 1);
    const shapeWrapper = createTag('div', '', {
      style: `position:absolute; top:${randomY}px; left:${randomX}px; width:fit-content`,
    });
    const svgStart = `<svg width="${preSize}" height="${preSize}" viewbox="0 0 ${preSize} ${preSize}" xmlns="http://www.w3.org/2000/svg">`;
    const svgEnd = `</svg>`;
    let figureHTML = '';
    if (isCircle) {
      figureHTML = `<circle cx="${randomSize}" cy="${randomSize}" r="${randomSize}" fill="${randomColor()}"></circle>`;
    } else {
      const sides = random(3, 8);
      let poly = '';
      for (let i = 0; i < sides; i++) {
        poly += `${random(0, preSize)},${random(0, preSize)} `;
      }
      console.log('p', poly);
      figureHTML = `<polygon fill="${randomColor()}" points="${poly}"/>`;
    }
    shapeWrapper.innerHTML = `${svgStart}${figureHTML}${svgEnd}`;
    document.body.append(shapeWrapper);
  }
}
