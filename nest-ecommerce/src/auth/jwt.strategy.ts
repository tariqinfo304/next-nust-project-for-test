import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';  // Ensure you have this interface defined

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from Authorization header
      secretOrKey: '787gjhgj', // Use your actual secret or process.env.JWT_SECRET for production
    });
  }

  async validate(payload: JwtPayload) {
    // Return the payload to be used in the request object
    return { userId: payload.sub, username: payload.username };
  }
}
