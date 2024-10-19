export interface ICountry {
  title: string;
  flag: string;
  code: string;
  value: string;
}

export interface IChannel {
  name: string;
  imageUrl: string;
  isActive: boolean;
  timeout: number;
  type: string;
}

export interface ICreateCodeResponse {
  sessionId: string;
  sentTo: string;
  clientChannels: IChannel[];
}

export interface ISendCodeResponse {
  sessionId: string;
  clientChannel: IChannel;
}

export interface ICheckCodeResponse {
  verifyToken: string;
}
