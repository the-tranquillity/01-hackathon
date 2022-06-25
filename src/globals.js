//#region Import
import { ClicksModule } from './modules/clicks.module';
import { BackgroundModule } from './modules/background.module';
import { MessageModule } from './modules/message.module';
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from './modules/shape.module';
//#endregion

//#region Constants
export const OPEN_CLASS = 'open';
export const MENU_SELECTOR = '#menu';
export const ELEMENTS = [
  {
    name: 'clicks',
    text: 'Считать клики (за&nbsp;7&nbsp;секунд)',
    type: ClicksModule,
  },
  {
    name: 'background',
    text: 'Поменять цвет фона',
    type: BackgroundModule,
  },
  {
    name: 'timer',
    text: 'Таймер отсчета',
    type: TimerModule,
  },
  {
    name: 'shape',
    text: 'Создать фигуру',
    type: ShapeModule,
  },
  {
    name: 'message',
    text: 'Показать случайное сообщение',
    type: MessageModule,
  },
];
//#endregion

export const timerElements = [
  {
    tag: 'form',
    name: 'form',
    content: '',
    attr: {
      class: 'timer-input_form',
    },
    parent: 'cont',
  },
  {
    tag: 'input',
    name: 'hr',
    content: '',
    attr: {
      name: 'hours',
      type: 'number',
      min: '0',
      max: '23',
      value: '0',
    },
    parent: 'form',
  },
  {
    tag: 'input',
    name: 'min',
    content: '',
    attr: {
      name: 'minutes',
      type: 'number',
      min: '0',
      max: '59',
      value: '0',
    },
    parent: 'form',
  },
  {
    tag: 'input',
    name: 'sec',
    content: '',
    attr: {
      name: 'seconds',
      type: 'number',
      min: '0',
      max: '59',
      value: '0',
    },
    parent: 'form',
  },
  {
    tag: 'button',
    content: 'Start',
    name: 'submit',
    attr: {
      class: 'timer-button',
      type: 'submit',
    },
    parent: 'form',
  },
  {
    tag: 'button',
    content: 'Cancel',
    name: 'cancel',
    attr: {
      class: 'canсel-button',
      type: 'button',
    },
    parent: 'form',
  },
  {
    tag: 'span',
    name: 'shower',
    content: '',
    attr: {
      class: 'timer-span hidden',
    },
    parent: 'cont',
  },
];
