export interface IElement extends HTMLInputElement {
  target?: { [key: string]: string };
}

const badWord = 'плохое';

const validation = (e: IElement, type?: string): boolean => {
  const target = type ? e : e.target;
  let name = '';
  let value = '';
  if (target) {
    value = target.value;
    name = target.name;
    if (target.nodeName !== 'INPUT') {
      return true;
    }
  }
  switch (name) {
    case 'login': {
      return /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/.test(value) && value.length >= 2;
    }
    case 'email': {
      return /^([\w]+@([\w-]+\.)+[\w-]{2,4})?$/.test(value) && value.length > 5;
    }
    case 'first_name':
    case 'second_name':
    case 'chat_name': {
      return value.length >= 2;
    }
    case 'phone': {
      // eslint-disable-next-line no-useless-escape
      return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(value);
    }
    case 'password': {
      return value.length >= 5;
    }
    case 'repeat_password': {
      const passwordValue = document.querySelector('input[name=password]') as HTMLInputElement;
      if (passwordValue !== null) {
        return passwordValue.value === value;
      }
      return true;
    }
    case 'message': {
      return !value.toLowerCase().includes(badWord);
    }
    default: {
      return value.length > 0;
    }
  }
};

export default validation;
