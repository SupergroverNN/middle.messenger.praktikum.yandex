import { IChat } from './interface';

const renderOneChat = (options: IChat) => {
  const { id, avatar, last_message, title, unread_count } = options;
  const last_message_text = last_message ? JSON.parse(last_message).content : '';
  const last_message_time = last_message
    ? JSON.parse(last_message).time.slice(0, 10).replace(/-/g, '.')
    : '';
  const result = `
.one_chat_block#${id}
  img.one_chat_block--left_part(src='${avatar ? avatar : './default_avatar.png'}')
  .one_chat_block--central_part
    .central_top
      span.central_top--chat_name ${title}
      span.central_top--last_message_time ${last_message_time}
    .central_bottom
      p.central_bottom--last_message ${last_message_text}
      .central_bottom--message_count_block ${unread_count}
hr`;
  return result;
};

const getChatsContent = (options: IChat[]): string => {
  return options.reduce((acc, option) => {
    return acc + renderOneChat(option);
  }, '');
};
export default getChatsContent;
