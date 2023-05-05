// Runs the express server to serve angular app

// Use Express
var express = require("express");
var path = require("path");
// Create new instance of the express server
var app = express();

// Create link to Angular build directory
// The `ng build` command will save the result
// under the `dist` folder.
app.use('/', express.static(path.join(__dirname, 'dist/protect-personal-privacy')));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "dist/protect-personal-privacy/index.html")));

app.get("/test", (req, res) => {
    res.send("hello world");
});

// Init the server
var server = app.listen(8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});