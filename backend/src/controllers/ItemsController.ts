import {Request, Response} from 'express'
import knex from '../database/connection'

class ItemsController {
    async index (req:Request, res: Response) {
    
        const items = await  knex('items').select(' * ')
    
        const serializedItems = items.map(item => {
            return {
                title: item.titulo,
                id: item.id,
                image_url: `http://192.168.0.105:3333/uploads/${item.image}`
            }
        })
    
        return res.json(serializedItems)
}
}
export default ItemsController