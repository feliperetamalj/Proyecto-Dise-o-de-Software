import express from 'express';
import bodyParser from 'body-parser';
import sendEmail from './sendEmail.js';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', sendEmail);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});