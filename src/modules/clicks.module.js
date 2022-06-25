import { Module } from '../core/module';
import { statAddClick, addMultipleEventListener } from '../utils';

export class ClicksModule extends Module {
  async trigger() {
    const arrClicks = [];
    addMultipleEventListener(document.body, ['click', 'dblclick'], (event) =>
      statAddClick(event, arrClicks)
    );

    const response = async (waitMs) =>
      new Promise((resolve) =>
        setTimeout(() => resolve(callback(arrClicks)), waitMs)
      );

    const result = await response(4000);
    return result;

    function callback(arr) {
      const dblAmount = arr.filter((el) => el.type === 'dblclick').length;
      const clcAmount =
        arr.filter((el) => el.type === 'click').length - dblAmount * 2;
      console.log(
        `Total clicks ${
          arr.length - dblAmount
        } (${clcAmount} single, ${dblAmount} double). Event log:`
      );
      console.table(arr);
    }
  }
}
//#region Trash
//console.log('trigger ClicksModule');
//console.log(result);
//const total = obj.length;
//return console.log(total);
/*     document.body.addEventListener('dblclick', (event) => {
      objClicks[Date.now()] = includeClick(event);
      console.log('dbl detail', event.detail);
    });

    document.body.addEventListener('click', (event) => {
      objClicks[Date.now()] = includeClick(event);
      console.log('single detail', event.detail);
    });

    (event) => {
        objClicks[Date.now()] = ;
        console.log('single detail', event.detail);
 */
/* document.body.addEventListener('click', (event) =>
      statAddClick(event, objClicks)
    ); */
//const res = await setTimeout(() => objClicks, 5000);
//return console.log('res', res);
/*     const result = await x();

    
    

    const x = async (waitMs) =>
    new Promise((resolve) => setTimeout(() => resolve('done'), waitMs));
    console.log(await x(1000)); */
//#endregion
