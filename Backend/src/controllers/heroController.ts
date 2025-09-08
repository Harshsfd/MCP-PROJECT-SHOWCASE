import { Request, Response } from 'express';
import hero from '../data/hero.json';

export const getHero = (req: Request, res: Response) => {
  res.json(hero);
};
