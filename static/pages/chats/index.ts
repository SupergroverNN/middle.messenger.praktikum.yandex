// make one_chat_block component ?
const chatsContent = (): string => {
  return `main
            .chat_list
              .chat_list--profile
                a(href='./profile.html') Профиль
              .chat_list--search
                input.search_input(type='text' placeholder='Поиск')
                img.search_image(src='./search.svg' alt='search_icon')
              .chat_list--chats
                hr
                .one_chat_block
                  img.one_chat_block--left_part(src='./cookie_monster.png')
                  .one_chat_block--central_part
                    .central_top
                      span.central_top--chat_name Cookie Monster
                      span.central_top--last_message_time 12 марта 2020
                    .central_bottom
                      p.central_bottom--last_message Привет! Смотри, тут всплыл интересный кусок лунной
                      .central_bottom--message_count_block 4
                hr
                .one_chat_block.selected_chat
                  img.one_chat_block--left_part(src='./elmo.jpeg')
                  .one_chat_block--central_part
                    .central_top
                      span.central_top--chat_name Elmo
                      span.central_top--last_message_time 12:43
                    .central_bottom
                      p.central_bottom--last_message Привет. Тут большой текст нашddелся, посмотри как у тебя стили это обрабатывают?!! Еще немного допишу текста чтобы точно понятно было!
                      .central_bottom--message_count_block.no_unread 4
                hr
                .one_chat_block
                  img.one_chat_block--left_part(src='./supergrover.jpeg')
                  .one_chat_block--central_part
                    .central_top
                      span.central_top--chat_name Supergrover
                      span.central_top--last_message_time &Vcy;&tcy;
                    .central_bottom
                      p.central_bottom--last_message Ну я тоже чтото тебе напишу чтобы не так пусто было! )
                      .central_bottom--message_count_block 19
                hr
            .chat_window
              .partner_block
                img.partner_block--avatar(src='./elmo.jpeg' alt='partner_avatar')
                span.partner_block--name Elmo
                .partner_block--options
                  img(src='./dots.svg' alt='dots')
                  .partner_block--options_dialog
                    span.add_user Добавить пользователя
                    span.remove_user Удалить пользователя
              .messages_block
                .messages_block--date 27 марта
                .one_message_block
                  span.one_message_block--content
                    | Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну.
                    .one_message_block--time 11:23
                .one_message_block.your_message
                  span.one_message_block--content Вот это дааааа!
                    .one_message_block--time 11:28
              .input_message_block
                img.input_message_block--attach(src='./attach.svg' alt='')
                input.input_message_block--input(type='text' name='message' placeholder='Сообщение')
                img.input_message_block--button(src='./send_arrow.svg' alt='send_arrow')
                span.input_message_block--error_message Вы ввели плохое слово`;
};
export default chatsContent;
