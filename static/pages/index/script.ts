import validation from '../../js/validation';
import {AuthAPI} from '../../api/auth-api';

const api = new AuthAPI();

export const indexScript = (): void => {
  const form = document.querySelector('.auth_form') as HTMLFormElement;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    const data: {[key: string]: string} = {};
    inputs.forEach((item) => {
      const { name, value } = item;
      data[name] = value;
      console.log(`${name}: ${value}`);
    });
    inputs.forEach((input: HTMLInputElement) => {
      const parentNode = input.parentNode as HTMLDivElement;
      if (parentNode !== null) {
        if (!validation(input, 'input') && !parentNode.classList.contains('error')) {
          parentNode.classList.add('error');
        } else if (parentNode.classList.contains('error') && validation(input, 'input')) {
          parentNode.classList.remove('error');
        }
      }
    });
    const errors = form.querySelectorAll('.error').length;
    if (!errors) {
      api.signin(data).then((res)=> {
        if(res.status === 200) {
          const link = document.createElement('a');
          link.href = './chats';
          link.click();
        }
      });
    }
  });
  form.addEventListener(
    'focus',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      const parentNode = e.path[1];

      if (!validation(e) && !parentNode.classList.contains('error')) {
        parentNode.classList.add('error');
      } else if (parentNode.classList.contains('error') && validation(e)) {
        parentNode.classList.remove('error');
      }
    },
    true
  );
  form.addEventListener(
    'blur',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      const parentNode = e.path[1];

      if (!validation(e) && !parentNode.classList.contains('error')) {
        parentNode.classList.add('error');
      } else if (parentNode.classList.contains('error') && validation(e)) {
        parentNode.classList.remove('error');
      }
    },
    true
  );
};
