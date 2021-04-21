import validation from '../../js/validation';

// mb make universal script with querySelector?
export const profileScript = (): void => {
  let isEdit = false;
  const form = document.querySelector('.profile_form') as HTMLFormElement;
  const changeButton = document.querySelector('.change_data') as HTMLElement;
  const inputs = form.querySelectorAll('input');
  inputs.forEach((input) => {
    input.disabled = true;
  });
  changeButton.addEventListener('click', () => {
    const data = new FormData(form);
    inputs.forEach((item) => {
      const { name, value } = item;
      data.append(name, value);
      console.log(`${name}: ${value}`);
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    inputs.forEach((input: any) => {
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
      isEdit = !isEdit;
      changeButton.textContent = isEdit ? 'Сохранить данные' : 'Изменить данные';
      inputs.forEach((input) => {
        input.disabled = !isEdit;
      });
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
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
