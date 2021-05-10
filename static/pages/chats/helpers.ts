import { ChatAPI } from './../../api/chats-api';
const requester = new ChatAPI();
import getChatsContent from '../../components/chat';
import * as pug from 'pug';

export const getChatList = (chatList: HTMLDivElement) => {
  return requester.getChats().then((res) => {
    const chatsData = JSON.parse(res.response);
    const chats = pug.render(getChatsContent(chatsData));
    chatList.innerHTML = chats;
  });
};

export const changeModalProps = (
  modal: HTMLDivElement,
  header: string,
  placeholder: string,
  buttonText: string
): void => {
  const title = modal.querySelector('span');
  const input = modal.querySelector('input');
  const button = modal.querySelector('button');
  if (title && input && button) {
    title.innerText = header;
    input.placeholder = placeholder;
    button.innerText = buttonText;
  }
};

export const createChat = (chatList: HTMLDivElement, title: string) => {
  return requester.createChat({ title }).then(() => getChatList(chatList));
};

export const addUser = (userId: number, chatId: number) => {
  const options = {
    users: [userId],
    chatId
  };
  return requester.addUser(options);
};

export const deleteUser = (userId: number, chatId: number) => {
  const options = {
    users: [userId],
    chatId
  };
  return requester.deleteUser(options);
};
