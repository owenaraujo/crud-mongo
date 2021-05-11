import {config} from "dotenv"
config()
export default {
    mongodb: process.env.mongodb, 
    secret : process.env.SECRET

}
