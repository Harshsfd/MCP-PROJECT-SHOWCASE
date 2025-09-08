import { Request, Response } from 'express';
import codeblocks from '../data/codeblock.json';

export const getCodeBlocks = (req: Request, res: Response) => {
  res.json(codeblocks);
};
