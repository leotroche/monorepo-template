import express from "express";

export const app = express();

app.use(express.json());

app.get("/", (_, res) => {
	res.status(200).json({ message: "Hello, world!" });
});
