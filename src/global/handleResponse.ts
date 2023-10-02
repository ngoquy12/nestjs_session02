export class ResponseData<T> {
  data: T | T[];
  message: string;
  status: number;

  constructor(data: T | T[], message: string, status: number) {
    if (data !== null) this.data = data;
    if (message !== null) this.message = message;
    if (status !== null) this.status = status;
  }
}
