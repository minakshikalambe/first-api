const express=require("express");

const app=express();

 app.use(logger);

app.get("/books",(req,res)=>{
    return res.send({ route: "/books"})
});

app.use(checkPermission)
app.get("/libraries",checkPermission,(req,res)=>{
    return res.send({ route: "/libraries", permission:req.permission})
});

app.get("/authors",checkPermission,(req,res)=>{
    return res.send({ route: "/authors", permission:req.permission})
});

function logger(req,res,next){
    console.log("before rout handler logger");
    next();
}

function checkPermission(req,res,next){
    if(req.path==="/libraries")
    {
        req.permission=true
    }
    else if(req.path==="/authors")
    {
        req.permission=true
    }
    next();
}
app.listen(5002,()=>{
    console.log("Listening on port 5002")
})