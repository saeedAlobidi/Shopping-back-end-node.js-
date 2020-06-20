const {dataBase} = require("../Infrastructure/database/DataBase");
const express = require("express");
 
const app = express();

app.use(express.json());



async function getCategory() {
    var db=dataBase.getInstance();
    const date = await  db.Query("select id,name,type from Tb_Category ");

     console.log(date) ;
}
getCategory();
app.get('/saeed', (req, res) => {
    console.log("saeed");
   

})
app.listen(5100);