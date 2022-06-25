//#region Import
import { OPEN_CLASS } from './globals';
//#endregion

//#region Classes
export class ElementsFactory {
  static createInstances(data) {
    const elements = {};
    data.forEach((item) => {
      const elementCreator = item.type;
      if (elementCreator && item.name && item.text) {
        elements[item.name] = new elementCreator(item.name, item.text);
      }
    });
    return elements;
  }
}
//#endregion

//#region Common Functions
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function addMultipleEventListener(
  element,
  events,
  handler,
  options = { once: false }
) {
  events.forEach((el) => element.addEventListener(el, handler, options));
}

export function removeMultipleEventListener(element, events, handler) {
  events.forEach((el) => element.removeEventListener(el, handler));
}

export function createTag(tag = 'div', txt = '', attributes = {}, parent = {}) {
  const element = document.createElement(tag);
  element.innerText = txt;
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(`${key}`, value);
  });
  if (parent instanceof HTMLElement) parent.append(element);
  return element;
}
//#endregion

//#region ClicksModule
export function clicksStatAdd(event, clicksArray) {
  clicksArray.push({
    type: event.type,
    time: Date.now(),
    x: event.x,
    y: event.y,
  });
}

export function clicksDrawClick(event) {
  const element = createTag(
    'div',
    '',
    {
      class: 'clicksCssDrawClick',
      style: `left:${event.x - 20}px; top:${event.y - 20}px`,
    },
    document.body
  );
  setTimeout(() => {
    element.remove();
  }, 1400);
}
//#endregion

//#region BackgroundModule
export function randomColor() {
  const res = [];
  for (let i = 0; i < 3; i++) {
    res.push(random(0, 255));
  }
  return `rgb(${res.join(',')})`;
}
//#endregion

//#region Menu Functions
export function handleMenuClick(event, menuModules, menuHTML) {
  const [datatype, isMenuChild] = [
    event.target?.dataset?.type,
    event.target.offsetParent === menuHTML,
  ];

  // Возможно, проверка лишняя
  if (!datatype || !isMenuChild) return false;

  menuHTML.classList.remove(OPEN_CLASS);
  menuModules[datatype].trigger();
}
//#endregion

//#region Trash
/*
  Additional menu checks
  const module = Object.keys(menuModules).find((key) => key === datatype); 
  if (menuModules[datatype]) 
*/
//#endregion
