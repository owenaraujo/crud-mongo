import {config} from "dotenv"
config()
export default {
    mongodb: process.env.MONGODB_URI,
    secret : process.env.SECRET

}
// export default {
// }