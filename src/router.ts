import { Router } from 'express';
import { createAccount } from './handlers';
const router = Router()

// auth and register
router.post('/auth/register', createAccount)

export default router