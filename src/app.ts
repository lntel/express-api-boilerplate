import express from 'express'
import config from './config'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import testRouter from './routes/test'

const app = express();

app.use(morgan(config.mode === 'dev' ? 'dev' : 'combined'))
app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/', testRouter);

app.listen(config.apiPort, () => {
    console.log(`http://localhost:${config.apiPort} -> Operational`);
});