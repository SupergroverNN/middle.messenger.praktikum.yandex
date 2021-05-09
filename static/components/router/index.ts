export class Block {
  _content: HTMLElement | null;
  _data: any;
  _init: void;
  constructor(data: any) {
    this._data = data;
    this._content = this.createElement();
    this._init = this.init();
  }
  getContent(): any {
    if (this._content){
        return this._content.innerHTML;
    }
    return null;
  }
  createElement(): HTMLElement {
    return (document.createElement('div'));
  }

  init(): void {
    if (this._content && !this._content.innerHTML){
        this._content.innerHTML = this._data;
    }
  }
  show(): void {
    if (this._content) {
        console.log('show1', this.getContent());
        this._content.style.display = 'block';

    }
  }

  hide(): void {
    if (this._content) {
        console.log('hide1', this.getContent());
        this._content.style.display = 'none';
    }
  }
}

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render(query: string, block: Block): Element | null {
  const root = document.querySelector(query) as any;
  const content = block.getContent();
  if (root && content) {
    root.innerHTML = content;
    return root;
  }
  return root;
}

class Route {
  _pathname: string;
  _blockClass: any;
  _block: any;
  _props: any;
  constructor(pathname: string, view: any, props: any) {
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
      console.log('render');
    // if (!this._block) {
        console.log('1');
        
      this._block = this._blockClass;
      render(this._props.rootQuery, this._block);
      return;
//     }
// console.log('2');

//     this._block.show();
  }
}

class Router {
  routes: any[];
  history: History;
  _currentRoute: Route | null;
  _rootQuery: string;
  static __instance: Router;
  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Block): Router {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start(): void {
    window.onpopstate = (event: any) => {
      this._onRoute(event.currentTarget.location.pathname);
    };
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string): void {
    const route = this.getRoute(pathname);
    if (!route && this._currentRoute) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    route.render();
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

  getRoute(pathname: string): Route {
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
