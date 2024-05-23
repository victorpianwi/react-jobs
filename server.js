const express = require("express");
const app = express();
const path = require("path");

// add middlewares
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static("public"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
console.log("Server started on port:", PORT);
app.listen(PORT);