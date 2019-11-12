import { Request,Response } from 'express'
import pool from '../database'
class MensajesController{
    

    public async list (req:Request,res:Response)  {
        const { id }=req.params;
        const users= await pool.query('SELECT * FROM Mensaje where idChat=? and estado!="borrado" ',[id]);
        res.json(users);
        console.log(users);
     }
     public async listall (req:Request,res:Response)  {
        const users= await pool.query('SELECT * FROM Mensaje');
        res.json(users);
     }
 
     
     
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Mensaje set ?',[req.body]);
        
        res.json({message:'Mensaje Saved'});
    }
    
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('update Mensaje set estado="borrado" where idMensaje=?',[id]);
        
        res.json({message:'Chat deleted'});
    }
    

    
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Usuarios set ? WHERE idUsuario= ?',[req.body,id]);
        res.json({text: 'User Updated'})
    }

}
const mensajesController=new MensajesController();
export default mensajesController;