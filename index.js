import express from "express";
import Connection from "./database/db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const Port = 8000;

Connection();

app.listen(Port, () => console.log(`App listening on port ${Port}`));
