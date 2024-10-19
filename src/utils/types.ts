export interface IResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  errorParams?: any;
}
