import * as express from 'express';
import { UserController } from '../../../controllers/UserController';

const router = express.Router();
router.get('/profile', UserController.getUserProfileData);
export default router;