import "@babel/polyfill";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema';

dotenv.config();

const app = express();
//app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// app.use(morgan('dev', { stream: accessLogStream }));

app.use(bodyParser.json({ limit: '100mb' }));

app.use(
  '/graphql',
  graphqlHTTP((req) => ({
    schema: schema,
    graphiql: true,
    context: {
      token: req.headers.authorization || '',
    },
    customFormatErrorFn: (err) => {
      return {
        code: err?.originalError?.response?.status,
        message: err?.originalError?.response?.data || err?.message,
        locations: err?.locations,
        path: err?.path,
      };
    },
  }))
);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`GATEWAY SERVICE LISTENING ON PORT ${PORT}`);
});
