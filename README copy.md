### Откройте pull request изменений из ветки dev (вы можете назвать иначе) в ветку main. ВАЖНО: pull request должен называться "Sprint i", где i — номер спринта.
### Также не забудьте проверить, что репозиторий публичный.
### Добавьте ниже ссылку на открытый pull request.



Даже законченный проект остаётся только заготовкой, пока им не начнут пользоваться. Но сначала пользователь должен понять, зачем ему пользоваться вашим кодом. В этом помогает файл README.

README — первое, что прочитает пользователь, когда попадёт в репозиторий на «Гитхабе». Хороший REAMDE отвечает на четыре вопроса:

- Готов ли проект к использованию?
- В чём его польза?
- Как установить?
- Как применять?

## Description

Данный проект является отправной точкой для создания фронтенд части онлайн чата, написанного на нативном js. 

В спринте 2 был добавлен такой функционал как:
 - Код написан с использованием Typescript
 - Добавлена функция для запросов к API
 - Добавлен EventBus и все события обрабатываются им
 - Добавлен линтер для стилей и кода
 - Использован модульный подход при создании страниц
 - Добавлена валидация форм
 - Добавлены статические анализаторы и инструменты для кода


Ссылка на [figma](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1) с макетами чата.

Ссылка на [проект](https://yandex-praktikum-sprint1-supergrovernn.netlify.app/) в Netlify 
[![Netlify Status](https://api.netlify.com/api/v1/badges/9b58bd67-7e87-4617-a0d0-f84e5030ab01/deploy-status)](https://app.netlify.com/sites/yandex-praktikum-sprint1-supergrovernn/deploys)

pull request https://github.com/SupergroverNN/middle.messenger.praktikum.yandex/pull/2

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
npm run start - билд проекта и запуск ExpressJS сервера для раздачи статики
npm run buld  - билд проекта
npm run lint  - тестирование кодестайла
```
