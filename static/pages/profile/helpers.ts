import { AuthAPI } from '../../api/auth-api';
import { UserAPI } from '../../api/user-api';

export interface IObject {
  [key: string]: string | number;
}

const authService = new AuthAPI();
const userService = new UserAPI();

export const modalToggle = (query: string): void => {
  const modal: HTMLElement | null = document.querySelector(query);
  if (modal) {
    if (modal.classList.contains('hidden')) {
      modal.classList.remove('hidden');
    } else {
      modal.classList.add('hidden');
    }
  }
};

export const getUserInfo = (
  inputs: NodeListOf<HTMLInputElement>,
  avatar: HTMLImageElement,
  displayName: HTMLSpanElement
): any => {
  return authService.getUserInfo().then((res) => {
    const userData = JSON.parse(res.response);
    displayName.textContent = userData.display_name;
    inputs.forEach((input) => {
      const { name } = input;
      const data = userData[name] ? userData[name] : '';
      input.value = data;
      input.disabled = true;
    });
    if (userData.avatar) {
      avatar.src = `http://ya-praktikum.tech/api/v2/resources${userData.avatar}`;
    } else {
      avatar.src = './default_avatar.png';
    }
  });
};

export const changeUserData = (
  data: IObject,
  avatar: HTMLImageElement,
  displayName: HTMLSpanElement
): any => {
  return userService.changeProfile(data).then((res) => {
    const userData = JSON.parse(res.response);
    displayName.textContent = userData.display_name;
    if (userData.avatar) {
      avatar.src = `http://ya-praktikum.tech/api/v2/resources${userData.avatar}`;
    } else {
      avatar.src = './default_avatar.png';
    }
  });
};

export const changeAvatar = (data: FormData, avatar: HTMLImageElement): any => {
  return userService.changeAvatar(data).then((res) => {
    const userData = JSON.parse(res.response);
    if (userData.avatar) {
      avatar.src = `http://ya-praktikum.tech/api/v2/resources${userData.avatar}`;
    } else {
      avatar.src = './default_avatar.png';
    }
  });
};

export const userLogout = (): void => {
  authService.logout().then((res) => {
    if (res.status === 200) {
      const link = document.createElement('a');
      link.href = './index';
      link.click();
    }
  });
};

export const changePassword = (data: IObject): any => {
  return userService.changePassword(data);
};
