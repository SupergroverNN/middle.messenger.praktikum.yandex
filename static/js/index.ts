import * as pug from 'pug';
import EventBus from '../components/eventBus';

import '../styles/main.scss';

import indexContent from '../pages/index';
import registrationContent from '../pages/registration';
import page404 from '../pages/page404';
import page500 from '../pages/page500';
import chatsContent from '../pages/chats';
import profileContent from '../pages/profile';

import { registrationScript } from '../pages/registration/script';
import { indexScript } from '../pages/index/script';
import { chatsScript } from '../pages/chats/script';
import { profileScript } from '../pages/profile/script';


import Router, { Block } from '../components/router';

export const EVENT_TYPES = {
  AUTH: 'AUTH',
  REGISTRATION: 'REGISTRATION',
  CHATS: 'CHATS',
  PROFILE: 'PROFILE',
} as const;

const router = new Router('#index-root');

const Index = new Block(pug.render(indexContent()));
const Registration = new Block(pug.render(registrationContent()));
const Chats = new Block(pug.render(chatsContent()));
const Profile = new Block(pug.render(profileContent()));
const Page404 = new Block(pug.render(page404()));
const Page500 = new Block(pug.render(page500()));

router
.use('/', Index)
.use('/index', Index)
.use('/registration', Registration)
.use('/chats', Chats)
.use('/profile', Profile)
.use('/404', Page404)
.use('/500', Page500)
.start();

const eventBus = new EventBus();

function runPageScript(): void {
  const { pathname } = window.location;
  switch (pathname) {
    case '/':
    case '/index': {
      eventBus.on(EVENT_TYPES.AUTH, indexScript);
      eventBus.emit(EVENT_TYPES.AUTH);
      return;
    }
    case '/registration': {
      eventBus.on(EVENT_TYPES.REGISTRATION, registrationScript);
      eventBus.emit(EVENT_TYPES.REGISTRATION);
      return;
    }
    case '/chats': {
      eventBus.on(EVENT_TYPES.CHATS, chatsScript);
      eventBus.emit(EVENT_TYPES.CHATS);
      return;
    }
    case '/profile': {
      eventBus.on(EVENT_TYPES.PROFILE, profileScript);
      eventBus.emit(EVENT_TYPES.PROFILE);
      return;
    }
    default:
      return;
  }
}

runPageScript();
