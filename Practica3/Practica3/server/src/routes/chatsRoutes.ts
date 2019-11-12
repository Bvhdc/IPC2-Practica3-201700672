import { Router } from 'express'

import chatsController from '../controllers/chatsController'
class ChatsRoutes{

    public router: Router=Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/',chatsController.listall)
        this.router.get('/:id',chatsController.list)
        this.router.post('/',chatsController.create)
        this.router.delete('/:id',chatsController.delete)
        this.router.put('/:id',chatsController.update)
    }

}
const chatsRoutes=new ChatsRoutes
export default chatsRoutes.router