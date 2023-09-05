import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./data/database";
import toDoRoutes from "./routes/todo-route";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT;
const SERVER = process.env.DB_SERVER;

app.use("/toDo", toDoRoutes);

const connect = async () => {
  try {
    const sqlconnect = await db.pool;
    const result = sqlconnect.request();
    console.log("Connected at dbase...");
    console.log(`Server location: ${SERVER}`);
  } catch (error) {
    console.error(error);
  }
};
app.listen(4001, () => {
  console.log(`App is running on port: 4001`);
});
connect();
