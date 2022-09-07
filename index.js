const express = require("express");
const menu = require("./routes/menu");
const pelanggan = require("./routes/pelanggan");
const pesanan = require("./routes/pesanan");


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    res.send("hello Homepage")
})

app.use(menu)
app.use(pelanggan)
app.use(pesanan)





app.listen(PORT,()=>console.log(`Server running at port ${PORT}..`))