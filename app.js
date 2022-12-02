import express from 'express';
import chalk  from 'chalk';
import debug from 'debug';
import morgan from 'morgan';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req,res) =>{
    
    res.send("Hello Thanapon Siriwarin");
})

app.listen(port,()=>{
    debug("Listening on port"+chalk.red(port));
})