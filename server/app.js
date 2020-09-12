import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { errors } from 'celebrate';
import dotenv from 'dotenv';
import Response from './Helpers/Response';

import routes from './Routes/index';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => Response.commonSuccess(req, res, 200, 'Welcome to Easy Ads'));
app.use('/api/v1', routes);
app.use(errors());

app.use((req, res) => {
  const error = new Error('Route not found');
  error.status = 404;
  return Response.commonError(req, res, error.status, error.message);
});

// Server Error
app.use((error, req, res) => {
  const status = error.status || 500;
  return Response.commonError(req, res, status, error.message || 'Server error');
});

export default app;
