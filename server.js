const express=require('express');
const path=require('path');
const app=express();
 app.use(express.static(path.join(__dirname+'/build')));

const port=process.env.PORT||8080;
//app.use(cors({credentials: true, origin: true}));
app.get('/*',function(req,res){
 
  res.sendFile('./build/index.html');
});

// app.get('/',function(req,res) {
//     res.send("Welcome to the strip apis ");
// });
app.listen(port,function () {
    console.log("Todo React app running on:"+port);

});