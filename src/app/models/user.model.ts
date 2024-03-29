export interface User {
  nickname: string;
  name: string;
  picture: string;
  updated_at: Date & string;
  email: string;
  email_verified: boolean;
  sub: string;
}
