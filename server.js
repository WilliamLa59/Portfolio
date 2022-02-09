const express = require('express');
const path = require("path")

const app = express();

app.use(express.static("static"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
})

app.get("/assets/:file", (req, res)=>{
    res.sendFile(path.join(__dirname,"/static/assets/"+req.params.file))
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server listening on port 3000: http://localhost:3000/")
});
