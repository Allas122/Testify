import { FastifyInstance } from "fastify";
import { UserRotes } from "./userRoute";

export async function allRoutes(instance:FastifyInstance,opts:Object,done:Function){
    instance.register(UserRotes)
    done()
} 