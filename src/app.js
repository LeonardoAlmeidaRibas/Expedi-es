import express from 'express';
import "dotenv/config";
import speciesRouter from './routes/species-router.js';
import explorerRouter from './routes/explorers-router.js';
import expeditionsRouter from './routes/expeditions-router.js';

const app = express();
app.use(express.json());

app.use('/species', speciesRouter);
app.use('/explorer', explorerRouter);
app.use('/expeditions', expeditionsRouter);

app.listen(process.env.API_PORT, () => console.log('Server is running on port ' + process.env.API_PORT));