import { IResponse } from "@/utils/types";
import {
  ICheckCodeResponse,
  ICreateCodeResponse,
  ISendCodeResponse,
} from "@/services/sign-in/model";
import { axiosInstance } from "@/config/axios";

interface ISigninService {
  createCode(phone: string): Promise<IResponse<ICreateCodeResponse>>;
  sendCode(
    sessionId: string,
    type: string
  ): Promise<IResponse<ISendCodeResponse>>;
  checkCode(
    sessionId: string,
    code: string
  ): Promise<IResponse<ICheckCodeResponse>>;
}

class SigninService implements ISigninService {
  private axiosInstance = axiosInstance;

  async createCode(phone: string): Promise<IResponse<ICreateCodeResponse>> {
    return this.axiosInstance.get("/create", {
      params: { phone },
    });
  }

  async sendCode(
    sessionId: string,
    type: string
  ): Promise<IResponse<ISendCodeResponse>> {
    return this.axiosInstance.get("/send", {
      params: { session_id: sessionId, type },
    });
  }

  async checkCode(
    sessionId: string,
    code: string
  ): Promise<IResponse<ICheckCodeResponse>> {
    return axiosInstance.get("/check", {
      params: {
        session_id: sessionId,
        code,
      },
    });
  }
}

export const signInService = new SigninService();
