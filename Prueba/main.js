const express = require("express")
const app = express()

const path = require('path');
const router = express.Router();


router.get("/VR", function(req, res){
    res.sendFile(path.join(__dirname + "/index.html"));
})

app.get("/hola", function (req, res) {
    res.send("Hola mundo")
})
// cuando llegue GET /adios
app.get("/adios", function (req, res) {
    res.send("Hasta pronto")
})
app.use('/', router);
app.listen(process.env.port || 8080);

//192.168.0.158