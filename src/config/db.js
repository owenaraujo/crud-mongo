import {config} from "dotenv"
config()
console.log(process.env.MONGO_URI);
export default {
    mongodb: process.env.MONGO_URI, 
    mongodb_2: process.env.MONGO_URI_2, 
    secret : process.env.SECRET

}
