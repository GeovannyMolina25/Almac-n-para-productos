import Server from "./models/server"
import dotenv from 'dotenv'
// configuramos las cariables del ambiente 
dotenv.config();
const server = new Server();