import type { AuthDTO } from "@/dto/AuthDTO";
import type { Auth } from "@/model/Auth";

export function mapAuth(dto: AuthDTO): Auth {
  return {
    accessToken: dto.access_token,
    expiresIn: dto.expires_in,
    refreshExpiresIn: dto.refresh_expires_in,
    refreshToken: dto.refresh_token,
    tokenType: dto.token_type,
    sessionState: dto.session_state,
    scope: dto.scope,
  };
}
