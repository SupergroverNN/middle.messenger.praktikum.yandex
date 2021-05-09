import { IOptions, METHODS, IData } from './interface';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function queryStringify(data: IData | { [key: string]: string } | any): string {
  if (!data) {
    return '';
  }
  const keys = Object.keys(data);
  const result = keys.map((key) => {
    return `${key}=${String(data[key])}`;
  });
  return `?${result.join('&')}`;
}

class HTTPTransport {
  get = (url: string, options: IOptions): Promise<XMLHttpRequest> => {
    const { data } = options;
    let urlEnd = '';
    if (data) {
      urlEnd = `${queryStringify(data)}`;
    }
    return this.request(url + urlEnd, { ...options, method: METHODS.GET });
  };
  post = (url: string, options: IOptions): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.POST });
  };
  put = (url: string, options: IOptions): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };
  delete = (url: string, options: IOptions): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url: string, options: IOptions): Promise<XMLHttpRequest> => {
    const { method, data } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}

export default HTTPTransport;
