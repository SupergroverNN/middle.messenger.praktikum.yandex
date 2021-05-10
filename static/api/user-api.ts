import { IObject } from './../pages/profile/helpers';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import HTTPTransport from '../components/httpTransport';
import { BaseAPI } from './base-api';

const requester = new HTTPTransport('/user');

export class UserAPI extends BaseAPI {
  changeProfile(data: any): Promise<XMLHttpRequest> {
    const options = {
      data
    };
    return requester.put('/profile', options);
  }
  changeAvatar(data: any): Promise<XMLHttpRequest> {
    const options = {
      data,
      isFormData: true
    };
    return requester.put('/profile/avatar', options);
  }
  changePassword(data: IObject): Promise<XMLHttpRequest> {
    return requester.put('/password', { data });
  }
}
