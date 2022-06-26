import { Module } from '../core/module';
import {
  addMultipleEventListener,
  removeMultipleEventListener,
  clicksStatAdd,
  clicksDrawClick,
  createTag,
} from '../utils';
import { MODAL_ELEMENTS } from '../globals';
export class ClicksModule extends Module {
  async trigger() {
    const clicks = [];

    addMultipleEventListener(
      document.body,
      ['click', 'dblclick'],
      clicksStatHandler
    );

    const clicksResponse = async (waitMs) =>
      new Promise((resolve) =>
        setTimeout(() => resolve(clicksResult(clicks)), waitMs)
      );

    const result = await clicksResponse(4000);

    return result;

    function clicksStatHandler(event) {
      clicksStatAdd(event, clicks);
      clicksDrawClick(event);
    }

    function clicksResult(clicksData) {
      const moment = require('moment');
      const modalDom = {};
      // prettier-ignore
      MODAL_ELEMENTS.forEach((e) => (modalDom[e.name] = createTag(
       e.tag, e.content, e.attr, e.parent ? document.body : null)));
      modalDom.modal.append(modalDom.container);
      modalDom.container.append(modalDom.close);
      modalDom.checkbox.checked = true;
      modalDom.close.onclick = quit;

      const dbTotal = clicksData.filter((e) => e.type === 'dblclick').length;
      // prettier-ignore
      const sgTotal = clicksData.filter((e) => e.type === 'click').length - dbTotal * 2;
      // prettier-ignore
      createTag('h3',`${clicksData.length - dbTotal} clicks, ${sgTotal} single, ${dbTotal} double`,
      {class:'text-lg font-bold mb-2'}, modalDom.container)

      // prettier-ignore
      const modalTableContainer = createTag('div', '', 
      { class: 'overflow-y-auto' }, modalDom.container);
      // prettier-ignore
      const modalTable = createTag('table','', {
       class:'table table-compact w-full'}, modalTableContainer
       )
      modalTable.innerHTML =
        '<thead><tr><th>Type</th><th>Hr : Min : Sec</th><th>X</th><th>Y</th></tr></thead>';
      const modalTableBody = createTag('tbody', '', {}, modalTable);
      let modalTableContent = '';
      clicksData.forEach((e) => {
        modalTableContent += `<tr><td>${e.type}</td><td>${moment(e.time).format(
          'h : mm : ss.S'
        )}</td><td>${e.x}</td><td>${e.y}</td></tr>`;
      });
      modalTableBody.innerHTML = modalTableContent;

      function quit() {
        [modalDom.modal, modalDom.checkbox, modalDom.label].forEach((e) =>
          e.remove()
        );
      }
      removeMultipleEventListener(
        document.body,
        ['click', 'dblclick'],
        clicksStatHandler
      );
    }
  }
}
//#region Trash
//#endregion
