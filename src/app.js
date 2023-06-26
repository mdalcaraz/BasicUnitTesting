import express from "express";

const app = express();

app.use(express.json());

app.get("/index", (req, res) => {
    res.send("Soy un index");
})

export default app;
