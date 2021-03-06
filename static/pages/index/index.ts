import { indexInputsData } from './data';
import button from '../../components/button';
import inputField from '../../components/input';
import link from '../../components/link';

const indexPage = (): string => {
  const mainButton = button({
    link: '',
    text: 'Авторизоваться',
    className: 'button',
    type: 'submit'
  });
  const secondButton = link({
    link: './registration',
    text: 'Нет аккаунта?',
    className: 'default'
  });
  const inputs = inputField(indexInputsData);
  return `main.auth
    form.auth_form(action='#' novalidate='')
      .auth_content
        h4.auth_content--header Вход
        .form_content
          ${inputs}
      .buttons_wrapper
        ${mainButton}
        ${secondButton}`;
};
export default indexPage;
