import { Request, Response } from 'express';
import projects from '../data/project.json';

export const getProjects = (req: Request, res: Response) => {
  res.json(projects);
};
