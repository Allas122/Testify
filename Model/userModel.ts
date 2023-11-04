import {Model, InferAttributes,InferCreationAttributes,DataTypes,ForeignKey, CreationOptional} from "sequelize";
import { Client } from "./db";


export interface UserAttributes{
    id?:number,
    name:string,
    password:string,
    icon?:string,
    email:string
}

export interface IUserModel extends Model<InferAttributes<IUserModel>,InferCreationAttributes<IUserModel>>{
    id:CreationOptional<number>;
    name:string;
    email:string;
    password: string;
    icon:CreationOptional<string>
}


export const UserModel = Client.define<IUserModel>("User",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    email:{
        type:DataTypes.STRING,
        validate:{
            isEmail:true
        }
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    icon:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

