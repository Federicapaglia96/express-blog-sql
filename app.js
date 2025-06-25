import express from "express";
import blogRouter from "./routers/blog.js"

const app = express();
const port = 3000;

app.use("/blog", blogRouter)

app.listen(port,()=>{
    console.log(` server in ascolto ${port}` )
});