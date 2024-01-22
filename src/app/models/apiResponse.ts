import { User } from "./user";

export interface Data {
  token?: string;
  user?: User;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: Data;
}