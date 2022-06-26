//#region Import
import { ClicksModule } from './modules/clicks.module';
import { BackgroundModule } from './modules/background.module';
import { MessageModule } from './modules/message.module';
import { TimerModule } from './modules/timer.module';
import { ShapeModule } from './modules/shape.module';
import { SoundsModule } from './modules/sounds.module';
//#endregion

//#region Basic Constants
export const OPEN_CLASS = 'open';
export const MENU_SELECTOR = '#menu';
export const TOAST_DURATION = 8000;
export const ELEMENTS = [
  {
    name: 'clicks',
    text: 'Считать клики (за&nbsp;4&nbsp;секунды)',
    type: ClicksModule,
  },
  {
    name: 'background',
    text: 'Поменять цвет фона',
    type: BackgroundModule,
  },
  {
    name: 'timer',
    text: 'Запустить таймер',
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
  {
    name: 'sound',
    text: 'Воспроизвести случайный звук',
    type: SoundsModule,
  },
];
//#endregion

//#region Colors
//* https://huemint.com/
export const RANDOM_HEX_BG = [
  '#94d7e1',
  '#5cc39c',
  '#8cc972',
  '#a3cdb4',
  '#f6c9b5',
  '#faf8f7',
  '#eec7f6',
  '#84d7c9',
  '#f2c4b9',
  '#4fb5e7',
  '#03d289',
  '#a5d8ea',
  '#f2c479',
  '#fffdf8',
  '#e9c4c9',
  '#c5cffe',
  '#f6b9cb',
  '#c5cffe',
  '#d0dfed',
  '#d9dbdb',
  '#e4e3e7',
  '#dce2df',
  '#ded7d2',
  '#b0adac',
  '#ccddf7',
  '#d5d2d4',
  '#ccd3e8',
  '#d8dbd7',
  '#dce2e9',
];

export const RANDOM_HEX_BG_DARK = [
  '#0f2778',
  '#5cc39c',
  '#192d3f',
  '#611c9d',
  '#6b1336',
  '#080a09',
];
//#endregion

//#region Nodes
export const MODAL_ELEMENTS = [
  {
    tag: 'label',
    name: 'label',
    content: '',
    attr: {
      for: 'hk-modal',
      class: 'btn modal-button',
    },
    parent: 'body',
  },
  {
    tag: 'input',
    name: 'checkbox',
    content: '',
    attr: {
      id: 'hk-modal',
      class: 'modal-toggle',
      type: 'checkbox',
    },
    parent: 'body',
  },
  {
    tag: 'div',
    name: 'modal',
    content: '',
    attr: {
      class: 'modal',
    },
    parent: 'body',
  },
  {
    tag: 'div',
    name: 'container',
    content: '',
    attr: {
      class: 'modal-box relative pt-12',
    },
    parent: null,
  },

  {
    tag: 'label',
    name: 'close',
    content: '✕',
    attr: {
      for: 'hk-modal',
      class: 'btn btn-sm btn-circle absolute right-2 top-2',
    },
    parent: null,
  },
];

export const TIMER_ELEMENTS = [
  {
    tag: 'form',
    name: 'form',
    content: '',
    attr: {
      class: 'form-control',
    },
    parent: null,
  },
  {
    tag: 'span',
    name: 'lhr',
    content: 'hr',
    attr: {
      class: 'uppercase',
    },
    parent: 'form',
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
      placeholder: 'Hours',
      value: '0',
      class: 'input input-timer input-group input-group-md',
    },
    parent: 'form',
  },
  {
    tag: 'span',
    name: 'lmin',
    content: 'min',
    attr: {
      class: 'uppercase',
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
      placeholder: 'Minutes',
      value: '0',
      class: 'input input-timer input-group input-group-md',
    },
    parent: 'form',
  },
  {
    tag: 'span',
    name: 'lsec',
    content: 'sec',
    attr: {
      class: 'uppercase',
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
      placeholder: 'Seconds',
      value: '0',
      class: 'input input-timer input-group input-group-md',
    },
    parent: 'form',
  },
  {
    tag: 'button',
    content: 'Start',
    name: 'submit',
    attr: {
      class: 'btn btn-primary',
      type: 'submit',
    },
    parent: 'form',
  },
  {
    tag: 'div',
    name: 'shower',
    content: '',
    attr: {
      class: 'grid grid-flow-col gap-5 text-center auto-cols-max hidden',
    },
    parent: null,
  },
];
//#endregion

export const MOD_MSG_MESSAGES = [
  'Жизнь - это то, что с тобой происходит, пока ты строишь планы. - Джон Леннон',
  '80% успеха - это появиться в нужном месте в нужное время. - Вуди Аллен',
  'Свобода ничего не стоит, если она не включает в себя свободу ошибаться. - Махатма Ганди',
  'Стоит только поверить, что вы можете – и вы уже на полпути к цели. - Теодор Рузвельт',
  'Коржики — они, конечно, лучше на вкус, чем на слух… - Джоэль Харрис (Сказки Дядюшки Римуса)',
  'Для того чтобы во что-то верить, вовсе не обязательно знать, правда ли это. - Туве Янссон (Цикл о Муми-Троллях)',
  'Взрослым никогда не бывает по-настоящему весело. Да и чем они заняты: скучной работой или модами, а говорят только о мозолях и подоходных налогах. - Астрид Линдгрен (Пеппи Длинныйчулок)',
  'Любить незнакомые места легко: мы принимаем их такими, какие они есть, и не требуем ничего, кроме новых впечатлений. - Макс Фрай',
  'Вы найдете хорошее в плохом, когда будете спокойны и пассивны. - Йода',
  'Не пробуй. Делай или не делай. Нет никаких попыток. — Йода',
  'Счастье – это не нечто готовое. Счастье зависит только от ваших действий. - Далай Лама',
  'Лучшее время, чтобы посадить дерево, было 20 лет назад. Следующий подходящий момент - сегодня. - Китайская пословица',
  'Быстрее всего учишься в трех случаях — до 7 лет, на тренингах, и когда жизнь загнала тебя в угол. - Стивен Кови',
];
