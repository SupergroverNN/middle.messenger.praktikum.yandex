import { IObject } from './../pages/profile/helpers';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import HTTPTransport from '../components/httpTransport';

const requester = new HTTPTransport('/user');

export class UserAPI {
  changeProfile(data: any): Promise<XMLHttpRequest> {
    const options = {
      data
    };
    // @ts-ignore
    return requester.put('/profile', options);
  }
  changeAvatar(data: any): Promise<XMLHttpRequest> {
    const options = {
      data,
      isFormData: true
    };
    // @ts-ignore
    return requester.put('/profile/avatar', options);
  }
  changePassword(data: IObject): Promise<XMLHttpRequest> {
    // @ts-ignore
    return requester.put('/password', { data });
  }
}
