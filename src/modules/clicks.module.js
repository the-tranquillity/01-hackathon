import { Module } from '../core/module';
import {
  addMultipleEventListener,
  removeMultipleEventListener,
  clicksStatAdd,
  clicksDrawClick,
} from '../utils';

export class ClicksModule extends Module {
  async trigger() {
    const clicks = [];

    document.querySelectorAll('.clicksCssDrawClick').forEach((e) => e.remove());

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

    function clicksResult(arr) {
      const dblAmount = arr.filter((el) => el.type === 'dblclick').length;
      const clcAmount =
        arr.filter((el) => el.type === 'click').length - dblAmount * 2;
      console.log(
        `Total clicks ${
          arr.length - dblAmount
        } (${clcAmount} single, ${dblAmount} double). Event log:`
      );
      console.table(arr);
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
