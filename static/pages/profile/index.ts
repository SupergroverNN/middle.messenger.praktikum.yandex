import inputField from '../../components/input';
import { profileInputsData } from './data';

const profileContent = (): string => {
  const inputs = inputField(profileInputsData);
  return `main.profile
            .change_avatar_block
              form.modal_content
                span.modal_content--title Загрузите файл
                input.modal_content--input(type='file')
                button.confirm_change_avatar.buttons_wrapper--button Поменять
            .change_password_block
              form.modal_content
                span.modal_content--title Изменение пароля
                input.modal_content--input(type='password' name='oldPassword' placeholder='Старый пароль')
                input.modal_content--input(type='password' name='newPassword' placeholder='Новый пароль')
                button.confirm_change_password.buttons_wrapper--button Поменять
            .main_part
              form.profile_form(action='#' novalidate='')
                img.profile_form--avatar(src='' alt='')
                button.change_avatar_button.buttons_wrapper--default Изменить аватар
                span.profile_form--name 
                .profile_form--fields_wrapper
                  ${inputs}
                .profile_form--footer
                  .one_form_field_block
                    span.one_form_field_block--title.change_data.blue Изменить данные
                  .one_form_field_block
                    span.one_form_field_block--title.pointer.change_password.blue Изменить пароль
                  .one_form_field_block.no_border
                    span.one_form_field_block--title.pointer.quit.red Выйти
              .left_part
                a(href='/chats')
                  img(src='./send_arrow.svg' alt='back_arrow')`;
};
export default profileContent;
