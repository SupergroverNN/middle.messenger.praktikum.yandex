export class Block {
  _content: HTMLElement | null;
  _data: string;
  _init: void;
  constructor(data: string) {
    this._data = data;
    this._content = this.createElement();
    this._init = this.init();
  }
  getContent(): string {
    if (this._content) {
      return this._content.innerHTML;
    }
    return '';
  }
  createElement(): HTMLElement {
    return document.createElement('div');
  }

  init(): void {
    if (this._content && !this._content.innerHTML) {
      this._content.innerHTML = this._data;
    }
  }
  show(): void {
    if (this._content) {
      this._content.style.display = 'block';
    }
  }

  hide(): void {
    if (this._content) {
      this._content.style.display = 'none';
    }
  }
}

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render(query: string, block: Block): Element | null {
  const root = document.querySelector(query);
  const content = block.getContent();
  if (root && content) {
    root.innerHTML = content;
    return root;
  }
  return root;
}

class Route {
  _pathname: string;
  _blockClass: Block;
  _block: Block | null;
  _props: { [key: string]: string };
  constructor(pathname: string, view: Block, props: { [key: string]: string }) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    this._block = this._blockClass;
    render(this._props.rootQuery, this._block);
    return;
  }
}

class Router {
  routes: Route[];
  history: History;
  _currentRoute: Route | undefined;
  _rootQuery: string;
  static __instance: Router;
  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Block): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start(): void {
    window.onpopstate = (event: PopStateEvent) => {
      if(event.currentTarget){
        this._onRoute((<Window>event.currentTarget).location.pathname);
      }
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);
    if (!route && this._currentRoute) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    if (route) {
      route.render();
    }
  }

  go(pathname: string): void {
    this._currentRoute && this._currentRoute.leave();
    this.history.pushState({}, '', pathname);
    console.log('this.history', this.history);
    this._onRoute(pathname);
  }

  back(): void {
    console.log('this._currentRouter', this._currentRoute);
    console.log('this.history', this.history);
    this._currentRoute && this._currentRoute.leave();
    this.history.back();
  }

  forward(): void {
    this._currentRoute && this._currentRoute.leave();
    this.history.forward();
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default Router;
// const router = new Router('.app');

// Можно обновиться на /user и получить сразу пользователя
// router.use('/', Chats).use('/users', Users).start();

// Через секунду контент изменится сам, достаточно дёрнуть переход
// setTimeout(() => {
//     router.go('/users');
// }, 1000);

// // А можно и назад
// setTimeout(() => {
//     router.back();
// }, 3000);

// // И снова вперёд
// setTimeout(() => {
//     router.forward();
// }, 5000);