import { FastifyInstance, FastifyRequest } from "fastify";

export async function jsonParsePlugin(instance:FastifyInstance, opts:Object,done:Function){
    instance.addContentTypeParser("*",{parseAs:"string"},function(request:FastifyRequest,body:string,Done:Function){
        try{
            var json = JSON.parse(body)
            console.log(body)
            Done(null,json)
        }catch(e){
            Done(e,undefined)
        }
    })
    return done()
}