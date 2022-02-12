const express = require('express');
const path = require("path")

const app = express();

app.use(express.static(__dirname+"/static"));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/index.html"))
})

app.get("/assets/:file", (req, res)=>{
    res.sendFile(path.join(__dirname,"/static/assets/"+req.params.file))
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server listening on port 3000: http://localhost:3000/")
});
