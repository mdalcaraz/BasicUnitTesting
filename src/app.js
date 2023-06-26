import express from "express";

const app = express();

app.use(express.json());

app.get("/index", (req, res) => {
    res.status(200).send('OKis');
})

export default app;
