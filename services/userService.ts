import { UserModel,UserAttributes} from "../Model";
import { hash } from "argon2";


export async function Register(params:UserAttributes) {
    try{
        params.password = await hash(params.password)
        return await UserModel.create(params)
    }catch(e){
        throw e
    }
}
