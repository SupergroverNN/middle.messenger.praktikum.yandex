import {
  changeAvatar,
  changePassword,
  changeUserData,
  getUserInfo,
  IObject,
  modalToggle,
  userLogout
} from './helpers';
import validation from '../../js/validation';

let isEdit = false;

// mb make universal script with querySelector?
export const profileScript = (): void => {
  const form: HTMLFormElement | null = document.querySelector('.profile_form');
  const changeButton: HTMLElement | null = document.querySelector('.change_data');
  const avatar: HTMLImageElement | null = document.querySelector('.profile_form--avatar');
  const displayName: HTMLSpanElement | null = document.querySelector('.profile_form--name');
  const confirmAvatarButton: HTMLButtonElement | null = document.querySelector(
    '.confirm_change_avatar'
  );
  const confirmPasswordButton: HTMLButtonElement | null = document.querySelector(
    '.confirm_change_password'
  );
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const avatarInput: any = document.querySelector('.modal_content--input');
  const modalTitle: HTMLSpanElement | null = document.querySelector('.modal_content--title');
  const changeAvatarButton: HTMLButtonElement | null = document.querySelector(
    '.change_avatar_button'
  );
  const quitButton: HTMLSpanElement | null = document.querySelector(
    '.one_form_field_block--title.quit'
  );
  const changePasswordButton: HTMLSpanElement | null = document.querySelector('.change_password');

  // initial make modals invisible
  modalToggle('.change_avatar_block');
  modalToggle('.change_password_block');

  quitButton &&
    quitButton.addEventListener('click', () => {
      userLogout();
    });

  let inputs: NodeListOf<HTMLInputElement> | null = null;
  if (form && avatar && displayName && changeButton && confirmAvatarButton) {
    confirmAvatarButton.disabled = true;
    inputs = form.querySelectorAll('input');

    // initial data for profile inputs
    getUserInfo(inputs, avatar, displayName);

    // change button listener
    changeButton.addEventListener('click', () => {
      const data: IObject = {};
      if (isEdit) {
        inputs &&
          inputs.forEach((input: HTMLInputElement) => {
            const { name, value } = input;
            data[name] = value;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const parentNode: any = input.parentNode;
            if (parentNode) {
              if (!validation(input, 'input') && !parentNode.classList.contains('error')) {
                parentNode.classList.add('error');
              } else if (parentNode.classList.contains('error') && validation(input, 'input')) {
                parentNode.classList.remove('error');
              }
            }
          });
        changeUserData(data, avatar, displayName);
      }
      const errors = form.querySelectorAll('.error').length;
      if (!errors && isEdit) {
        isEdit = false;
      } else if (!isEdit) {
        isEdit = true;
      }
      changeButton.textContent = isEdit ? 'Сохранить данные' : 'Изменить данные';
      inputs &&
        inputs.forEach((input) => {
          input.disabled = !isEdit;
        });
    });

    // change avatar file listener
    avatarInput.addEventListener('change', () => {
      if (avatarInput.files[0]) {
        confirmAvatarButton.disabled = false;
        if (modalTitle) {
          modalTitle.textContent = 'Файл загружен';
        }
      }
    });

    // change avatar confirm listener
    confirmAvatarButton.addEventListener('click', (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('avatar', avatarInput.files[0]);

      changeAvatar(formData, avatar).then(() => {
        modalToggle('.change_avatar_block');
      });
    });

    // activate modal for change avatar
    changeAvatarButton &&
      changeAvatarButton.addEventListener('click', () => {
        modalToggle('.change_avatar_block');
      });

    // activate modal for change password
    changePasswordButton &&
      changePasswordButton.addEventListener('click', () => {
        modalToggle('.change_password_block');
      });

    // change password confirm listener
    confirmPasswordButton &&
      confirmPasswordButton.addEventListener('click', (e) => {
        e.preventDefault();
        const changePassForm = document.querySelector('.change_password_block');
        if (changePassForm) {
          const passInputs = changePassForm.querySelectorAll('input');
          const data: IObject = {};
          passInputs &&
            passInputs.forEach((input: HTMLInputElement) => {
              const { name, value } = input;
              data[name] = value;
            });
          changePassword(data).then(() => {
            modalToggle('.change_password_block');
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
  }
};
