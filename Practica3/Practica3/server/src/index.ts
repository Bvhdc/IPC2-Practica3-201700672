import express, {Application} from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRoutes from "./routes/indexRoutes"
import usuariosRoutes from "./routes/usuariosRoutes"
import chatsRoutes from "./routes/chatsRoutes"
import mensajesRoutes from "./routes/mensajesRoutes"

class Server{
    public app: Application

    constructor(){
        this.app=express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port',process.env.port||3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));

    }

    routes():void{
        this.app.use(indexRoutes)
        this.app.use('/api/login',usuariosRoutes)
        this.app.use('/api/usuarios',usuariosRoutes)
        this.app.use('/api/chats',chatsRoutes)
        this.app.use('/api/mensajes',mensajesRoutes)
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log("Server on port",this.app.get('port'))
        });
    }
}
const server=new Server()
server.start();