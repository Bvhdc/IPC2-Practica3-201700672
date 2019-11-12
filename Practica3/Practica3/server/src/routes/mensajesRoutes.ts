import { Router } from 'express'

import mensajesController from '../controllers/mensajesController'
class MensajesRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',mensajesController.listall)
        this.router.get('/:id',mensajesController.list)
        
        this.router.post('/',mensajesController.create)
        this.router.delete('/:id',mensajesController.delete)
        this.router.put('/:id',mensajesController.update)
    }

}
const mensajesRoutes=new MensajesRoutes
export default mensajesRoutes.router