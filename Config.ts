import "dotenv/config"
export class Config{   
    HOST : string
    DB_URL : string
    PORT: number
    constructor(HOST : string = "0.0.0.0",DB_URL:string,port = 8080){
        this.HOST = HOST;
        if(!DB_URL){
            throw Error("DB_URL is not exists !")
        }
        this.DB_URL = DB_URL;
        this.PORT = 8080
    }
}
global.config = new Config(process.env.HOST,process.env.DB_URL)

