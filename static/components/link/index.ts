// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const link = (options: any): string => {
  const { link, text, className } = options;
  return `a.buttons_wrapper--${className}(href='${link}') ${text}`;
};
export default link;
