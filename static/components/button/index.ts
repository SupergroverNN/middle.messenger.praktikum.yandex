import { IButton } from './interface';

const button = (options: IButton): string => {
  const { text, className, type } = options;
  return `button.buttons_wrapper--${className}${type ? `(type=${type})` : ''} ${text}`;
};
export default button;
