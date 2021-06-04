import link from '.';
import { expect } from 'chai';
import * as pug from 'pug';

describe('Test render components 1', () => {
  it('Test link render', () => {
    const testLink = link({
      link: './registration',
      text: 'Нет аккаунта?',
      className: 'default'
    });
    const renderedLink = pug.render(testLink);
    const result = '<a class="buttons_wrapper--default" href="./registration">Нет аккаунта?</a>';
    expect(renderedLink).to.eq(result);
  });
});
