import {config} from "dotenv"
config()
export default {
    mongodb: process.env.MONGO_URI, 
    mongodb_2: process.env.MONGO_URI_2, 
    secret : process.env.SECRET

}
