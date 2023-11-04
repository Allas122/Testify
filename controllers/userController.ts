import { FastifyReply, ReplyGenericInterface } from "fastify/types/reply";
import { Register } from "../services/userService";
import { FastifyRequest, RequestGenericInterface } from "fastify";


export class UserController{
    static async Registration(req:FastifyRequest,repl:FastifyReply){
        console.log(req.body)
        return "heh"
    }
}