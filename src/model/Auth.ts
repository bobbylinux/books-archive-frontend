export interface Auth {
  accessToken: string;
  expiresIn: number;
  refreshExpiresIn: number;
  refreshToken: string;
  tokenType: string;
  sessionState: string;
  scope: string;
}
