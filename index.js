import express from "express";

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.get('/about',(req,res)=>{
    res.render('about.ejs');
});

app.get("/projects",(req,res)=>{
    res.render('projects.ejs');
});
app.get("/resume",(req,res)=>{
    res.render('resume.ejs');
});
app.listen(port,()=>{
 console.log(`sever started at ${port}`)
});

