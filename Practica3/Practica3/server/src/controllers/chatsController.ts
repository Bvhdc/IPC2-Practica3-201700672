import { Request,Response } from 'express'
import pool from '../database'
class ChatsController{
    

    public async list (req:Request,res:Response)  {
        const { id }=req.params;
        
        console.log(id)
        const users= await pool.query('Select Chat.idChat,t1.NombreUsuario as UsuarioEnvio,t2.NombreUsuario as UsuarioReceptor from Chat inner join Usuarios t1 on t1.idUsuario=Chat.idUsuarioEnvio inner join Usuarios t2 on t2.idUsuario=Chat.idUsuarioReceptor where t1.NombreUsuario= ? or t2.NombreUsuario= ? ',[id,id]);
        res.json(users);
     }
     public async listall (req:Request,res:Response)  {
        const users= await pool.query('Select Chat.idChat,t1.NombreUsuario as UsuarioEnvio,t2.NombreUsuario as UsuarioReceptor from Chat inner join Usuarios t1 on t1.idUsuario=Chat.idUsuarioEnvio inner join Usuarios t2 on t2.idUsuario=Chat.idUsuarioReceptor');
        res.json(users);
     }
 
     
     
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Chat set ?',[req.body]);
        
        res.json({message:'Chat Saved'});
    }
    
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Chat WHERE idChat= ?',[id]);
        
        res.json({message:'Chat deleted'});
    }
    

    
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Usuarios set ? WHERE idUsuario= ?',[req.body,id]);
        res.json({text: 'User Updated'})
    }

}
const chatsController=new ChatsController();
export default chatsController;