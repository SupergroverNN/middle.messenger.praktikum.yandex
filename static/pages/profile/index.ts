import inputField from '../../components/input';
import { profileInputsData } from './data';

const profileContent = (): string => {
  const inputs = inputField(profileInputsData);
  return `main.profile
            .main_part
              form.profile_form(action='#' novalidate='')
                img.profile_form--avatar(src='./sonic.jpg' alt='')
                span.profile_form--name Somebody
                .profile_form--fields_wrapper
                  ${inputs}
                .profile_form--footer
                  .one_form_field_block
                    span.one_form_field_block--title.change_data.blue Изменить данные
                  .one_form_field_block
                    span.one_form_field_block--title.blue Изменить пароль
                  .one_form_field_block.no_border
                    a.one_form_field_block--title.red(href='./index') Выйти
              .left_part
                a(href='/chats')
                  img(src='./send_arrow.svg' alt='back_arrow')`;
};
export default profileContent;
