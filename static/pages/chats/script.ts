import { addUser, changeModalProps, createChat, deleteUser, getChatList } from './helpers';
import { IElement } from './../../js/validation';
import validation from '../../js/validation';
import { modalToggle } from '../profile/helpers';

let chatId = 0;

export const chatsScript = (): void => {
  const messageInput: IElement | null= document.querySelector('.input_message_block--input');
  const sendButton: HTMLButtonElement | null = document.querySelector('.input_message_block--button');
  const addChatButton: HTMLButtonElement | null = document.querySelector('.add_chat');
  const addUserButton: HTMLButtonElement | null = document.querySelector('.add_user');
  const deleteUserButton: HTMLButtonElement | null = document.querySelector('.remove_user');
  const chatList: HTMLDivElement | null = document.querySelector('.chat_list--chats');
  const modalBlock: HTMLDivElement | null = document.querySelector('.modal_block_wrapper');
  let modalBlockInput: HTMLInputElement | null = null;
  let modalBlockButton: HTMLButtonElement | null = null;
  if (modalBlock) {
    modalBlockButton = modalBlock.querySelector('button');
    modalBlockInput = modalBlock.querySelector('input');
  }
  if(modalBlockButton) {
    modalBlockButton.disabled = true;
  }
  modalToggle('.modal_block_wrapper');
  
  // initial render chatList
  chatList && getChatList(chatList).then(()=> {
    const chats = chatList.querySelectorAll('.one_chat_block');
    chats.forEach(chat => chat.addEventListener('click', (e)=> {
      const target: any = e.currentTarget;
      if(target) {
        chatId = Number(target.id);
        console.log(chatId);
      }
    }));
  });

  // check input value for disable confirm button
  modalBlockInput && modalBlockInput.addEventListener('keyup', (e: any) => {
    if(e.target && e.target.value && modalBlockButton) {
      modalBlockButton.disabled = false;
    } else if (modalBlockButton) {
      modalBlockButton.disabled = true;
    }
  });

  addUserButton && addUserButton.addEventListener('click', ()=> {
    modalToggle('.modal_block_wrapper');
    if(modalBlock) {
      changeModalProps(modalBlock, 'Добавить пользователя', 'id пользователя', 'Добавить');
      if(modalBlockButton) {
        modalBlockButton.addEventListener('click', (e)=> {
          e.preventDefault();
          const userId = modalBlockInput ? Number(modalBlockInput.value) : 0;
          addUser(userId, chatId).then(()=> {
            modalToggle('.modal_block_wrapper');
          });
        });
      }
    }
  });

  // delete user from chat
  deleteUserButton && deleteUserButton.addEventListener('click', ()=> {
    modalToggle('.modal_block_wrapper');
    if(modalBlock) {
      changeModalProps(modalBlock, 'Удалить пользователя', 'id пользователя', 'Удалить');
      if(modalBlockButton) {
        modalBlockButton.addEventListener('click', (e)=> {
          e.preventDefault();
          const userId = modalBlockInput ? Number(modalBlockInput.value) : 0;
          deleteUser(userId, chatId).then(()=> {
            modalToggle('.modal_block_wrapper');
          });
        });
      }
    }
  });

  // add user to chat
  addChatButton && addChatButton.addEventListener('click', ()=> {
    modalToggle('.modal_block_wrapper');
    if(modalBlock) {
      changeModalProps(modalBlock, 'Создать чат', 'Название чата', 'Создать');
      if(modalBlockButton) {
        modalBlockButton.addEventListener('click', (e)=> {
          e.preventDefault();
          const title = modalBlockInput ? modalBlockInput.value : '';
          chatList && createChat(chatList, title).then(()=> {
            modalToggle('.modal_block_wrapper');
          });
        });
      }
    }
  });

  

  sendButton &&
    sendButton.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as Element;
      if (target.parentNode !== null) {
        const parentNode = target.parentNode as Element;
        if (parentNode && messageInput) {
          if (!validation(messageInput, 'input') && !parentNode.classList.contains('error')) {
            parentNode.classList.add('error');
          } else if (parentNode.classList.contains('error') && validation(messageInput, 'input')) {
            parentNode.classList.remove('error');
            messageInput.value = '';
          } else {
            messageInput.value = '';
          }
        }
      }
    });
  };

