// make one_chat_block component ?
const chatsContent = (): string => {
  return `main.chats
            .modal_block_wrapper
              form.modal_content
                span.modal_content--title
                input.modal_content--input
                button.confirm_button.buttons_wrapper--button
            .chat_list
              img.add_chat(src='./plus.svg' alt='add chat' title='Добавить чат')
              .chat_list--profile
                a(href='./profile') Профиль
              .chat_list--search
                input.search_input(type='text' placeholder='Поиск')
                img.search_image(src='./search.svg' alt='search_icon')
              .chat_list--chats
                hr
            .chat_window
              .partner_block
                img.partner_block--avatar(src='./default_avatar.png' alt='partner_avatar')
                span.partner_block--name
                .partner_block--options
                  img(src='./dots.svg' alt='dots')
                  .partner_block--options_dialog
                    span.add_user Добавить пользователя
                    span.remove_user Удалить пользователя
              .messages_block
              .input_message_block
                img.input_message_block--attach(src='./attach.svg' alt='')
                input.input_message_block--input(type='text' name='message' placeholder='Сообщение')
                img.input_message_block--button(src='./send_arrow.svg' alt='send_arrow')
                span.input_message_block--error_message Вы ввели плохое слово`;
};
export default chatsContent;
