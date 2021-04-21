import { IButton } from './interface';

const button = (options: IButton): string => {
  const { link, text, className, type } = options;
  if (type === 'submit') {
    return `button.buttons_wrapper--${className}(type='submit') ${text}`;
  }
  return `a.buttons_wrapper--${className}(href='${link}') ${text}`;
};
export default button;
