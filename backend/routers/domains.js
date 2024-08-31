import express from "express";
import fs from "fs";
import { publishers } from "../server.js";  

const domainsRouter = express.Router();

/*
Added this part in order to convert the data and write it to the JSON file.
and then used it in the post and delete methods
*/
const saveData = (data) => {
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2), "utf8");
};

domainsRouter.get("/", (req, res) => {
  const domains = publishers.flatMap(p => p.domains);
  res.json(domains);
});

domainsRouter.post("/", (req, res) => {
  const { publisher, domain } = req.body;
  const publisherData = publishers.find(p => p.publisher === publisher);
  if (publisherData) {
    publisherData.domains.push(domain);
    saveData(publishers);
    res.status(201).json(domain);
  } else {
    res.status(404).send("Publisher not found");
  }
});

export default domainsRouter;
