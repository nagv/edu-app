import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';
import { histogram } from '../../prometheus';

export class UserController {
    public static getUserProfileData(req: Request, res: Response, next: NextFunction) {
        try {
            const end = histogram.startTimer();
            const data = UserService.userProfileData();
            res.send(data).status(200);
            // stop the timer
            end({ method: req.method, 'status_code': 200 });
        } catch (e) {
            throw e;
        }
    }
}