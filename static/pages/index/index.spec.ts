import { expect } from 'chai';
import * as pug from 'pug';
import indexPage from '.';

describe('Test render template', () => {
  it('Test button render', () => {
    const testPage = indexPage();
    const renderedPage = pug.render(testPage);
    const result =
      '<main class="auth"><form class="auth_form" action="#" novalidate=""><div class="auth_content"><h4 class="auth_content--header">Вход</h4><div class="form_content"><div class="one_input_block"><span class="one_input_block--title">Логин</span><input class="one_input_block--input" name="login" required="true" type="text value="/><span class="one_input_block--error_message">Поле не пожет быть пустым или меньше 2х символов</span></div><div class="one_input_block"><span class="one_input_block--title">Пароль</span><input class="one_input_block--input" name="password" required="true" type="password value="/><span class="one_input_block--error_message">Длина пароля не может быть меньше 5 символов</span></div></div></div><div class="buttons_wrapper"><button class="buttons_wrapper--button" type="submit">Авторизоваться</button><a class="buttons_wrapper--default" href="./registration">Нет аккаунта?</a></div></form></main>';
    expect(renderedPage).to.eq(result);
  });
});
