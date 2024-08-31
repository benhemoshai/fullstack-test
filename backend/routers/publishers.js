import express from "express";
import fs from "fs";
import { publishers } from "../server.js";

const publishersRouter = express.Router();

/*
Added this part in order to convert the data and write it to the JSON file.
and then used it in the post and delete methods
*/
const saveData = (data) => {
    fs.writeFileSync("./db.json", JSON.stringify(data, null, 2), "utf8");
};

publishersRouter.get("/", (req, res) => {
    res.status(200).json(publishers);
});

publishersRouter.post("/", (req, res) => {
    const publisherName = req.body.publisher;
    const publisher = publishers.find(
        (existsPublisher) =>
            existsPublisher.publisher.toLowerCase() === publisherName.toLowerCase()
    );

    if (publisher) {
        return res
            .status(400)
            .json({ errorMessage: "The publisher already exists" });
    }

    const newPublisher = {
        publisher: publisherName,
        domains: [],
    };

    publishers.unshift(newPublisher);
    saveData(publishers); // Save changes to file
    res.status(201).json(newPublisher);
});

publishersRouter.delete("/:publisherName", (req, res) => {
    const publisherName = req.params.publisherName.toLowerCase();
    const publisherIndex = publishers.findIndex(
        (existsPublisher) =>
            existsPublisher.publisher.toLowerCase() === publisherName
    );

    if (publisherIndex !== -1) {
        const [deletedPublisher] = publishers.splice(publisherIndex, 1);
        saveData(publishers);
        return res.status(200).json(deletedPublisher);
    } else {
        return res
            .status(400)
            .json({ errorMessage: "Publisher not found" });
    }
});

export default publishersRouter;
