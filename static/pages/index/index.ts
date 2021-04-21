import { indexInputsData } from './data';
import button from '../../components/button';
import inputField from '../../components/input';

const indexPage = (): string => {
  const mainButton = button({
    link: '',
    text: 'Авторизоваться',
    className: 'button',
    type: 'submit',
  });
  const secondButton = button({
    link: './registration.html',
    text: 'Нет аккаунта?',
    className: 'default',
  });
  const inputs = inputField(indexInputsData);
  return `main
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
