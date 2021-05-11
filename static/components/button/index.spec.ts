import button from '.';
import { expect } from 'chai';
import * as pug from 'pug';

describe('Test render components 1', () => {
  it('Test button render', () => {
    const testButton = button({
      link: './registration',
      text: 'Нет аккаунта?',
      className: 'default'
    });
    const renderedButton = pug.render(testButton);
    const result = '<a class="buttons_wrapper--default" href="./registration">Нет аккаунта?</a>';
    expect(renderedButton).to.eq(result);
  });
});
