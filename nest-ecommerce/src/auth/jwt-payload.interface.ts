export interface JwtPayload {
  username: string;
  sub: number; // sub is typically the user ID
}
