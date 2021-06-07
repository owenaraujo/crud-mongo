import {config} from "dotenv"
config()
export default {
    mongodb: process.env.MONGO_URI, 
    secret : process.env.SECRET

}
