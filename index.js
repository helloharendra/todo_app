const app = require('./app');
const port = 3000;

app.get('/',(req,res)=>{
    res.send("helloahrendra")
});
app.listen(port,()=>{
    console.log(`server is running on port https://localhost:${port}`);
});