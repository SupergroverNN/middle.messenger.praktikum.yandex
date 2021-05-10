import { IObject } from './../pages/profile/helpers';
import HTTPTransport from '../components/httpTransport';
import { BaseAPI } from './base-api';

const requester = new HTTPTransport('/chats');

export class ChatAPI extends BaseAPI {
  getChats(): Promise<XMLHttpRequest> {
    return requester.get('');
  }
  createChat(data: IObject): Promise<XMLHttpRequest> {
    return requester.post('', { data });
  }
  addUser(data: any): Promise<XMLHttpRequest> {
    return requester.put('/users', { data });
  }
  deleteUser(data: any): Promise<XMLHttpRequest> {
    return requester.delete('/users', { data });
  }
}
