import express from "express";
import mongo from "connect-mongo";
import { MONGODB_URI } from "./util/secrets";
import bluebird from "bluebird";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes";
import path from "path"

const app: express.Application = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/../src/public")));
app.use(express.static(path.join(__dirname, "/../src/views")));


app.get('/', function(req: express.Request, res: express.Response) {
    res.sendFile("index.html");
})

app.use("/", routes);

export default app;