const {join} = require("path");
const path = require("path");

module.exports = function(app) {
     
    app.get("/notes.html", (req, res) => {
        console.log("notes.html");
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("/", (req, res) => {

        res.sendFile(path.join(__dirname, "../public/index.html"));
    }
    );
};

