import { IMessage } from './interface';

export const getOneMessage = (options: IMessage, currentUserId: number): string => {
  const { content, time, user_id } = options;
  let result = '';
  const formattedTime = time.slice(11, 16);
  result = `.one_message_block${user_id === currentUserId ? '.your_message' : ''}
    span.one_message_block--content ${content}
      .one_message_block--time ${formattedTime}`;

  return result;
};

const renderMessages = (options: IMessage | IMessage[], currentUserId: number): string => {
  if (Array.isArray(options)) {
    return options.reduce((acc, option) => {
      return acc + getOneMessage(option, currentUserId);
    }, '');
  } else {
    return getOneMessage(options, currentUserId);
  }
};
export default renderMessages;
