import { Router } from 'express'
import { protectedRoute, testRoute } from '../controllers/test';
import isSignedIn from '../middleware/isSignedIn';

const router = Router();

router.get('/test', testRoute);

router.get('/protected', isSignedIn, protectedRoute);

export default router;