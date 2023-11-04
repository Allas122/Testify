import { FastifyInstance } from "fastify";
import { jsonParsePlugin } from "./json";
export async function addAllContentTypes(instance:FastifyInstance,opts:Object,done:Function) {
    instance.register(jsonParsePlugin)
}