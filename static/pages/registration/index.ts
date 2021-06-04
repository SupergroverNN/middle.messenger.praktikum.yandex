import { registrationInputsData } from './data';
import button from '../../components/button';
import inputField from '../../components/input';
import link from '../../components/link';

const registrationContent = (): string => {
  const mainButton = button({
    link: '#',
    text: 'Регистрация',
    className: 'button',
    type: 'submit'
  });
  const secondButton = link({ link: './index', text: 'Войти', className: 'default' });
  const inputs = inputField(registrationInputsData);
  return `main.registration
  form.reg_form(action='#' novalidate='')
    .reg_content
      h4.reg_content--header Регистрация
      .form_content
        ${inputs}
    .buttons_wrapper
        ${mainButton}
        ${secondButton}`;
};
export default registrationContent;
