export const registrationInputsData = [
  { title: 'Почта', name: 'email', required: true, errorText: 'Невалидный адрес почты' },
  {
    title: 'Логин',
    name: 'login',
    required: true,
    errorText: 'Логин должен содержать только латинские буквы',
  },
  {
    title: 'Имя',
    name: 'first_name',
    required: true,
    errorText: 'Поле не пожет быть пустым или меньше 2х символов',
  },
  {
    title: 'Фамилия',
    name: 'second_name',
    required: true,
    errorText: 'Поле не пожет быть пустым или меньше 2х символов',
  },
  { title: 'Телефон', name: 'phone', required: true, errorText: 'Невалидный формат телефона' },
  {
    title: 'Пароль',
    name: 'password',
    required: true,
    type: 'password',
    errorText: 'Длина пароля не может быть меньше 5 символов',
  },
  {
    title: 'Пароль еще раз',
    name: 'repeat_password',
    required: true,
    type: 'password',
    errorText: 'Пароли не совпадают',
  },
];
