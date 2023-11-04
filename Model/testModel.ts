import {Model, InferAttributes,InferCreationAttributes,DataTypes,ForeignKey, CreationOptional} from "sequelize";
import { Client } from "./db";

interface TestModel extends Model<InferAttributes<TestModel>,InferCreationAttributes<TestModel>>{
    id:CreationOptional<number>;
    title: string;
    description: string;
    creatorId:ForeignKey<number>;
    likes:number;
    dislikes:number
}

export const TestModel = Client.define<TestModel>("Tests",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:true
    },
    creatorId:{
        type:DataTypes.INTEGER
    },
    likes:{
        type:DataTypes.INTEGER,
        defaultValue:0
    },
    dislikes:{
        type:DataTypes.INTEGER,
        defaultValue:0
    }
})

