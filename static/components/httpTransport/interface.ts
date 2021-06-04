export const METHODS = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
} as const;

type methodValues = keyof typeof METHODS;

export type IData = BodyInit | Document;

export interface IOptions {
  data?: IData;
  timeout?: number;
  method: methodValues;
  isFormData?: boolean;
}
