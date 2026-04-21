import type { AuthInput } from "@/model/AuthInput";
import { apiAuth } from "./axiosInstance";
import type { AuthDTO } from "@/dto/AuthDTO";
import { mapAuth } from "@/mappers/AuthMapper";
import type { Auth } from "@/model/Auth";

const BASE_URL = "/login";

export async function login(data: AuthInput): Promise<Auth> {
  const response = await apiAuth.post<AuthDTO>(BASE_URL, {
    username: data.username,
    password: data.password,
  });

  return mapAuth(response.data);
}
