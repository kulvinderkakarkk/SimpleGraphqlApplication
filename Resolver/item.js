import {nanoid} from 'nanoid'

class Item {
    constructor(id, {ItemName, Price, Category, Description, Reviews}) {
        this.id= id
        this.ItemName = ItemName
        this.Price = Price
        this.Category = Category
        this.Description = Description
        this.Reviews = Reviews
    }
}

const itemholder = {}

const resolvers = {
    getItem: ({id}) => {
        return new Item(id, itemholder[id])
    },
    createItem: ({input}) => {
        let id = nanoid()
        itemholder[id] = input
        return new Item(id, input)
    }
}

export default resolvers;
