import * as chai from 'chai';
import { expect, assert } from 'chai';
// @ts-ignore
import * as jsdom from 'mocha-jsdom';
import Router, { Block } from '.';
import * as pug from 'pug';

import indexContent from '../../pages/index/index';
import registrationContent from '../../pages/registration';
import page404 from '../../pages/page404';
import page500 from '../../pages/page500';
import chatsContent from '../../pages/chats';
import profileContent from '../../pages/profile';

chai.should();
jsdom({
  url: 'http://localhost:3000'
});
let router: Router;

describe('Проверяем переходы у Роута', () => {
  it('Переход на новую страницу должен менять состояние сущности history', () => {
    window.history.pushState({ page: 'login' }, 'Login', '/login');
    window.history.pushState({ page: 'register' }, 'Register', '/register');
    expect(window.history.length).to.eq(3);
  });
});

describe('Test router work', () => {
  beforeEach(() => {
    const Index = new Block(pug.render(indexContent()));
    const Registration = new Block(pug.render(registrationContent()));
    const Chats = new Block(pug.render(chatsContent()));
    const Profile = new Block(pug.render(profileContent()));
    const Page404 = new Block(pug.render(page404()));
    const Page500 = new Block(pug.render(page500()));
    router = new Router('#index-root');
    router
      .use('/', Index)
      .use('/index', Index)
      .use('/registration', Registration)
      .use('/chats', Chats)
      .use('/profile', Profile)
      .use('/404', Page404)
      .use('/500', Page500)
      .start();
  });

  it('go to /', () => {
    router.go('/');
    const currentPath = router.getCurrentPath();
    assert.equal(currentPath, '/');
  });
  it('go to /index', () => {
    router.go('/index');
    const currentPath = router.getCurrentPath();
    assert.equal(currentPath, '/index');
  });
  it('go to /registration', () => {
    router.go('/registration');
    const currentPath = router.getCurrentPath();
    assert.equal(currentPath, '/registration');
  });
  it('go to /chats', () => {
    router.go('/chats');
    const currentPath = router.getCurrentPath();
    assert.equal(currentPath, '/chats');
  });
  it('go to /profile', () => {
    router.go('/profile');
    const currentPath = router.getCurrentPath();
    assert.equal(currentPath, '/profile');
  });
  it('go to /404', () => {
    router.go('/404');
    const currentPath = router.getCurrentPath();
    assert.equal(currentPath, '/404');
  });
  it('go to /500', () => {
    router.go('/500');
    const currentPath = router.getCurrentPath();
    assert.equal(currentPath, '/500');
  });
});
