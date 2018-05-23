// panaudojama biblioteka
const express=require('express');
// inicijuojamas serveris
const app=express();

// HTTP request valdymas
app.get('/',(req,res)=>{
    res.send('project is under construction');
});

// port nustatymas
const port=process.env.PORT || 9000;
// serverio paleidimas ant pasirinkto port
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});