/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import HTTPTransport from '../components/httpTransport';
import { BaseAPI } from './base-api';

const requester = new HTTPTransport('/auth');

export class AuthAPI extends BaseAPI {
  signup(data: any): Promise<XMLHttpRequest> {
    const options = {
      data
    };
    return requester.post('/signup', options);
  }
  signin(data: any): Promise<XMLHttpRequest> {
    const options = {
      data
    };
    return requester.post('/signin', options);
  }
  getUserInfo(): Promise<XMLHttpRequest> {
    return requester.get('/user');
  }
  logout(): Promise<XMLHttpRequest> {
    return requester.post('/logout');
  }
}
