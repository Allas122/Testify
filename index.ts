import "./Config"
import { Client } from "./Model"
import "./Model";
import fastify from "fastify"
import { allRoutes } from "./routers";
import { addAllContentTypes } from "./contentParsers";

async function start(err:Error|null,address:string){
    console.log("..Trying to connect to db..")
    await Client.authenticate()
    await Client.sync({force:true})
    if(err){
        throw err
    }
    console.log(`Server is started on addres: ${address}`)
}


const server = fastify({logger:true})
server.register(allRoutes)
server.register(addAllContentTypes)
server.listen({host:global.config.HOST,port:global.config.PORT},(err,address)=>{
    start(err,address)
})