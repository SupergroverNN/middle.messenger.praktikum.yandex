export const profileInputsData = [
  {
    title: 'Почта',
    name: 'email',
    required: true,
    errorText: 'Невалидный адрес почты',
    value: 'pochta@pochta.ru',
    blockType: 'one_form_field_block',
  },
  {
    title: 'Логин',
    name: 'login',
    required: true,
    errorText: 'Логин должен содержать только латинские буквы',
    value: 'somebody_someone',
    blockType: 'one_form_field_block',
  },
  {
    title: 'Имя',
    name: 'first_name',
    required: true,
    errorText: 'Поле не пожет быть пустым или меньше 2х символов',
    value: 'Somebody',
    blockType: 'one_form_field_block',
  },
  {
    title: 'Фамилия',
    name: 'second_name',
    required: true,
    errorText: 'Поле не пожет быть пустым или меньше 2х символов',
    value: 'Someone',
    blockType: 'one_form_field_block',
  },
  {
    title: 'Имя в чате',
    name: 'chat_name',
    required: true,
    errorText: 'Поле не пожет быть пустым или меньше 2х символов',
    value: 'Someone',
    blockType: 'one_form_field_block',
  },
  {
    title: 'Телефон',
    name: 'phone',
    required: true,
    errorText: 'Невалидный формат телефона',
    value: '+7 (000) 000 00 00',
    blockType: 'one_form_field_block',
  },
];