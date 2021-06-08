import {config} from "dotenv"
config()
console.log(process.env.MONGO_URI);
export default {
    mongodb: process.env.MONGO_URI, 
    secret : process.env.SECRET

}
