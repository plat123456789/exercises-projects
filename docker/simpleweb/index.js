const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hi there svdfv");
})

app.listen(8080, () => {
    console.log("listen on port 8080")
});