const express = require("express");
const app = express();
const inventionsRouter = require("./routes/inventions");
const funFactsRouter = require("./routes/funFacts");
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use(inventionsRouter);
app.use(funFactsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
