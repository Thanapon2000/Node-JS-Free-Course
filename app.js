import express from 'express';
import chalk  from 'chalk';
import debug from 'debug';
import morgan from 'morgan';


const app = express()
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req,res) =>{
    
    res.send("Hello Thanapon Siriwarin");
})
app.listen(port, ()=>{
    debug("Listening on port"+chalk.red(port));
})