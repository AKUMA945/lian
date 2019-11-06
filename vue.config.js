let userjson = require("../src/data/user.json")
let listjson = require("../src/data/list.json")
let bodyParser=require("body-parser")

module.exports={
    devServer:{
        before(app){
            app.post("/login",bodyParser.json(),(req,res)=>{
                let {username,userpwd} = req.body;
                let obj = userjson.find(item=>item.name===username)
                if(!obj){
                    res.send({
                        code:0,
                        msg:"用户不存在"
                    })
                }else if(obj.pwd===userpwd){
                    res.send({code:1,msg:'登录成功',data:obj,token:new Date()*1})
                }else{
                    res.send({
                        code:0,
                        msg:"登录失败"
                    })
                }
            }),
            app.get("/list",(req,res)=>{
                res.send(listjson)
            })
        }
    }
}