const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")

const app = express();
app.use(bodyparser.json());
app.use(cors())
const name = [
    {
        email:"samadrita@.com",
        password: "1234",
        token : "ygxxg"
    },
    {
        email:"utpal@.com",
        password: "123",
        token : "ygx"   
    },
    {
        email:"utpal@.com",
        password: "12",
        token : "ygxx"  
    }
]

gfhgj


app.post("/login", cors(), (req,res)=>{
    const newName = name.find(user =>user.email === req.body.email &&  user.password === req.body.password)
    if (newName) {
        res.send({
            succ : true,
            fail : false,
           
        });
    }else{
        res.send({
            succ : true,
            fail : false,
            messege : "something is wrong"
        

        })
    }
})

app.listen(3000,()=>{
    console.log('app is running');
})

