import express from 'express';
import cors from 'cors';
import projectsRoutes from './routes/projects';
import heroRoutes from './routes/hero';
import codeRoutes from './routes/codeblocks';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectsRoutes);
app.use('/api/hero', heroRoutes);
app.use('/api/codeblocks', codeRoutes);

export default app;
