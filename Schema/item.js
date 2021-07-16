import {buildSchema} from 'graphql'

const ItemSchema = buildSchema(`
    type Item {
        id: ID,
        ItemName: String!
        Price: Int!,
        Category: Stack,
        Description: String,
        Reviews: IndividualReviews
    }

    type IndividualReviews {
        {
            Name: String,
            Rating: Int
        }
    }

    enum Stack {
        MOBILE
        PC
        KITCHEN APPLIANCE
        OTHER HARDWARE
    }

    type Query {
        getItem(id: ID): Item
    }

    type ItemInput {
        id: ID,
        ItemName: String!
        Price: Int!,
        Category: Stack,
        Description: String,
        Reviews: IndividualReviews
    }

    type Mutation {
        createItem(input: ItemInput): Item
    }
`)

export default ItemSchema;