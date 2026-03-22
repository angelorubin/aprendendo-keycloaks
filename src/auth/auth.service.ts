import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class AuthService {
  login(res: Response) {
    return res.redirect('/login');
  }

  logout(req: any, res: Response) {
    req.session.destroy(() => {
      res.clearCookie('grant');
      res.redirect('/');
    });
  }
}
