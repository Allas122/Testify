import { UserController } from "../controllers/userController"
import { FastifyInstance } from "fastify"

export async function UserRotes(instance:FastifyInstance,opts:Object,done:Function) {
    instance.get("/user/registration",UserController.Registration)
    done()
}