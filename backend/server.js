import express from "express";
import cors from "cors";
import fs from "fs";
import publishersRouter from "./routers/publishers.js";
import domainsRouter from "./routers/domains.js";

const PORT = 4300;
const app = express();
const data = fs.readFileSync("./db.json", "utf8");

export const publishers = JSON.parse(data);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/publishers", publishersRouter);
app.use("/api/domains", domainsRouter);

app.listen(PORT, console.log(`Server is listening on port ${PORT}`));
