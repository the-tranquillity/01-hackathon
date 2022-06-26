//#region Import
import './output.css';
import { ContextMenu } from './menu';
import { MENU_SELECTOR, ELEMENTS, NAVBAR } from './globals';
import {
  ElementsFactory,
  handleMenuClick,
  createTag,
  changeTheme,
  themeInit,
  splashScreen,
} from './utils';
//#endregion

themeInit();
//#region Constants
const menu = new ContextMenu(MENU_SELECTOR);
const menuHTML = document.querySelector(MENU_SELECTOR);
const menuModules = ElementsFactory.createInstances(ELEMENTS);
// prettier-ignore

splashScreen()

const nav = createTag(
  'div',
  '',
  {
    class: 'navbar rounded-box bg-base-300',
  },
  document.body
);
nav.innerHTML = NAVBAR;

document.querySelector('.btn-theme').addEventListener('click', (event) => {
  //if ('changeTheme' in event.target.dataset) {}
  changeTheme();
});

//#endregion

//#region ExecCode
Object.values(menuModules).forEach((module) => menu.add(module));
//#endregion

//#region Listners
document.body.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  menu.open(event);
});

menuHTML.addEventListener('click', (e) => {
  document
    .querySelectorAll(`body > *:not(${MENU_SELECTOR}):not(.navbar)`)
    .forEach((e) => e.remove());
  handleMenuClick(e, menuModules, menuHTML);
});

//#endregion
