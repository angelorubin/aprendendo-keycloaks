import { AuthService } from './auth.service';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(res: Response): Promise<any>;
    logout(req: any, res: Response): Promise<void>;
    getProfile(req: any): any;
}
