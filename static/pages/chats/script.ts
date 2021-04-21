import { IElement } from './../../js/validation';
import validation from '../../js/validation';

export const chatsScript = (): void => {
  const searchBlock = document.querySelector('.chat_list--search') as HTMLElement;
  const messageInput = document.querySelector('.input_message_block--input') as IElement;
  const sendButton = document.querySelector('.input_message_block--button') as HTMLButtonElement;
  const image = searchBlock.querySelector('img') as HTMLImageElement;
  if (searchBlock !== null) {
    searchBlock.querySelector('input')?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement;
      const { value } = target;
      if (value && !image.classList.contains('with_value')) {
        image.classList.add('with_value');
      } else if (!value) {
        image.classList.remove('with_value');
      }
    });
  }

  if (sendButton !== null) {
    sendButton.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as Element;
      if (target.parentNode !== null) {
        const parentNode = target.parentNode as Element;
        if (parentNode !== null) {
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
  }
};
