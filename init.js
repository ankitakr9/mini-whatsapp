const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(() =>{
    console.log("connection successful");

}).catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
    
}
let allChats =[
    {
    from: "Anku",
    to: "Paa",
    msg: "I Love You Paa",
    created_at: new Date(),
},
{
    from: "Anku",
    to: "Sibu",
    msg: "Hey!!",
    created_at: new Date(),
},
{
    from: "Khushi",
    to: "Maa",
    msg: "Miss You Mumma",
    created_at: new Date(),
},
{
    from: "Sagar",
    to: "Mridani",
    msg: "Hii! Dii",
    created_at: new Date(),
},
{
    from: "john",
    to: "peter",
    msg: "Hey!! whatsapp?",
    created_at: new Date(),
},
];
Chat.insertMany(allChats);