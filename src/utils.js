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

//#region Functions
export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function handleMenuClick(event, menuModules, menuHTML) {
  const [datatype, isMenuChild] = [
    event.target?.dataset?.type,
    event.target.offsetParent === menuHTML,
  ];

  // Возможно, проверка лишняя
  if (!datatype || !isMenuChild) return false;

  const module = Object.keys(menuModules).find((key) => key === datatype);
  menuHTML.classList.remove(OPEN_CLASS);
  if (menuModules[module]) menuModules[module].trigger();
}

export function statAddClick(event, arr) {
  arr.push({
    type: event.type,
    time: Date.now(),
    x: event.x,
    y: event.y,
  });
}

export function addMultipleEventListener(element, events, handler) {
  events.forEach((e) => element.addEventListener(e, handler));
}
//#endregion

//#region Trash
//#endregion
