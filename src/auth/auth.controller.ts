import { Controller, Get, UseGuards, Request, Res } from '@nestjs/common';
import { Public } from './decorators/public.decorator';
import { KeycloakAuthGuard } from './guards/keycloak-auth.guard';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  @Public()
  async login(@Res() res: Response) {
    return this.authService.login(res);
  }

  @Get('logout')
  @UseGuards(KeycloakAuthGuard)
  async logout(@Request() req, @Res() res: Response) {
    return this.authService.logout(req, res);
  }

  @Get('profile')
  @UseGuards(KeycloakAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
