import { Request,Response } from 'express'
import pool from '../database'
class UsuariosController{
    

    public async list (req:Request,res:Response)  {
        const users= await pool.query('SELECT * FROM Usuarios');
        res.json(users);
     }
 
     public async getOne (req:Request,res:Response)  {
        const { id }=req.params;
        const users=await pool.query('SELECT * FROM Usuarios WHERE NombreUsuario= ?',[id]);
        if (users.lenght = 1){
            res.json(users[0]);
        }else
        {res.status(404).json({text: 'User Doesnt Exist'});}
     }
     public async login (req:Request,res:Response) {
        const {carne} = req.params;
        const {pass} = req.params;
        const user=await pool.query('SELECT * FROM Usuarios WHERE NombreUsuario= ? AND Contra= ?',[carne,pass])                  
       
        if (user.lenght = 1){
            res.json(user[0]);
            
        }else
        {res.status(404).json({text: 'User Doesnt Exist'});}
    }
    public async create(req:Request,res:Response){
        await pool.query('INSERT INTO Usuarios set ?',[req.body]);
        
        res.json({message:'User Saved'});
    }
    public async delete(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('Delete FROM Usuarios WHERE idUsuario= ?',[id]);
        
        res.json({message:'User deleted'});
    }
    public async update(req:Request,res:Response){
        const { id }=req.params;
        await pool.query('UPDATE Usuarios set ? WHERE idUsuario= ?',[req.body,id]);
        res.json({text: 'User Updated'})
    }

}
const usuariosController=new UsuariosController();
export default usuariosController;