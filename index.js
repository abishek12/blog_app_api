import Express from "express";
import routes from "./routes/r_api.js";
import morgan from "morgan";
import 'dotenv/config';

const app = Express();

const port = process.env.PORT || 5000;
const version = process.env.VERSION;

/**
 * use of middleware
 */
app.use(Express.json());
app.use(morgan("tiny"));

app.use(`${version}`, routes.app);

app.listen(port, () => {
  console.log(`Server is loading at ${port}`);
});
