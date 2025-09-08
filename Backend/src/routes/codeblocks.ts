import { Router } from 'express';
import { getCodeBlocks } from '../controllers/codeController';

const router = Router();
router.get('/', getCodeBlocks);

export default router;
