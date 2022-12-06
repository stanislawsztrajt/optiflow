export enum ResponseStatus {
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export const ResponseStatusList = Object.values(ResponseStatus);
export type StatusType = ResponseStatus.LOADING | ResponseStatus.SUCCEEDED | ResponseStatus.FAILED;

export interface Iresponse<T> {
  data: T;
}

export interface IresponseQuery<T> {
  data: Iresponse<T>;
}

export interface Ierror {
  response: {
    data: {
      message: string;
    };
  };
}
