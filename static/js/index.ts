import pug = require('pug');
import EventBus from '../components/eventBus';

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

export const EVENT_TYPES = {
  AUTH: 'AUTH',
  REGISTRATION: 'REGISTRATION',
  CHATS: 'CHATS',
  PROFILE: 'PROFILE',
} as const;

const page = document.getElementById('index-root') as HTMLElement;
let html = '' as string;

const { pathname } = window.location;
switch (pathname) {
  case '/':
  case '/index.html': {
    html = pug.render(indexContent());
    break;
  }
  case '/registration.html': {
    html = pug.render(registrationContent());
    break;
  }
  case '/chats.html': {
    html = pug.render(chatsContent());
    break;
  }
  case '/profile.html': {
    html = pug.render(profileContent());
    break;
  }
  case '/500.html': {
    html = pug.render(page500());
    break;
  }

  default:
    html = pug.render(page404());
    break;
}
if (page !== null) {
  page.innerHTML = html;
}
const eventBus = new EventBus();

function runPageScript(): void {
  switch (pathname) {
    case '/':
    case '/index.html': {
      // delete all another events before add new
      eventBus.on(EVENT_TYPES.AUTH, indexScript);
      eventBus.emit(EVENT_TYPES.AUTH);
      return;
    }
    case '/registration.html': {
      eventBus.on(EVENT_TYPES.REGISTRATION, registrationScript);
      eventBus.emit(EVENT_TYPES.REGISTRATION);
      return;
    }
    case '/chats.html': {
      eventBus.on(EVENT_TYPES.CHATS, chatsScript);
      eventBus.emit(EVENT_TYPES.CHATS);
      return;
    }
    case '/profile.html': {
      eventBus.on(EVENT_TYPES.PROFILE, profileScript);
      eventBus.emit(EVENT_TYPES.PROFILE);
      return;
    }
    default:
      return;
  }
}

runPageScript();
