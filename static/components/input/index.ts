import { IInput } from './interface';

const getOneInput = (options: IInput) => {
  const {
    title,
    name,
    required,
    type = 'text',
    errorText = '',
    blockType = 'one_input_block',
    value = '',
  } = options;
  let result = '';
  if (blockType === 'one_input_block') {
    result = `
          .${blockType}
            span.${blockType}--title ${title}
            input.${blockType}--input(name='${name}' required='${required}' type='${type} value=${value}')
            span.${blockType}--error_message ${errorText}`;
  } else {
    result = `
                  .${blockType}
                    span.${blockType}--title ${title}
                    input.${blockType}--input(name='${name}' required='${required}' type='${type}' value='${value}')
                    span.${blockType}--error_message ${errorText}`;
  }
  return result;
};

const inputField = (options: IInput | IInput[]): string => {
  if (Array.isArray(options)) {
    return options.reduce((acc, option) => {
      return acc + getOneInput(option);
    }, '');
  } else {
    return getOneInput(options);
  }
};
export default inputField;
