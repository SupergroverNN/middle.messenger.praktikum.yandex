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
const BASE_URL = 'https://ya-praktikum.tech/api/v2';
const ACCEPTED_DELTA = 200;
class HTTPTransport {
  urlEnd: string;
  baseUrl: string;
  lastRequestTime: Date | number;
  constructor(urlEnd: string, baseUrl: string = BASE_URL) {
    this.urlEnd = urlEnd;
    this.baseUrl = baseUrl;
    this.lastRequestTime = 0;
  }
  get = (url: string, options?: IOptions): Promise<XMLHttpRequest> => {
    let data = null;
    if (options) {
      data = options.data;
    }
    let urlEnd = '';
    if (data) {
      urlEnd = `${queryStringify(data)}`;
    }
    return this.request(url + urlEnd, { ...options, method: METHODS.GET });
  };
  post = (url: string, options?: IOptions): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.POST });
  };
  put = (url: string, options?: IOptions): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };
  delete = (url: string, options?: IOptions): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url: string, options: IOptions, timeout = 400): Promise<XMLHttpRequest> => {
    const { method, data, isFormData } = options;
    return new Promise((resolve, reject) => {
      const currentTime = new Date();
      const delta = Number(currentTime) - Number(this.lastRequestTime);
      console.log('delta', delta);
      if (delta < ACCEPTED_DELTA) {
        // eslint-disable-next-line quotes
        console.log("Don't make DOS attack");
      } else {
        this.lastRequestTime = currentTime;
      }
      const xhr = new XMLHttpRequest();
      const fullUrl = `${this.baseUrl}${this.urlEnd}${url}`;
      xhr.open(method, fullUrl);

      xhr.onload = function () {
        resolve(xhr);
      };
      xhr.withCredentials = true;
      !isFormData && xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.timeout = timeout;
      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        isFormData ? xhr.send(data) : xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default HTTPTransport;
