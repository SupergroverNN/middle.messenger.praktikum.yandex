import { IChat } from './interface';

const renderOneChat = (options: IChat) => {
  const { id, avatar, last_message, title, unread_count } = options;
  const result = `
.one_chat_block#${id}
  img.one_chat_block--left_part(src='${avatar ? avatar : './default_avatar.png'}')
  .one_chat_block--central_part
    .central_top
      span.central_top--chat_name ${title}
      span.central_top--last_message_time
    .central_bottom
      p.central_bottom--last_message ${last_message ? last_message : ''}
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
