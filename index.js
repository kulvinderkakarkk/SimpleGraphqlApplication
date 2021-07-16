import ItemSchema from '../SimpleGraphqlApplication/Schema/item.js'
import {graphqlHTTP} from 'express-graphql'
import express  from 'express'
import ItemResolver from '../SimpleGraphqlApplication/Resolver/item.js'


const app=express()
app.get("/", (req,res) => {
    res.send("The application has started")
})

// Resolver functions for queries and mutations
const root = ItemResolver

// Start graphql server
app.use('/graphql', graphqlHTTP({
    schema: ItemSchema,
    rootValue: root,
    graphiql: true
}))

// Start the application on port 8082
app.listen(8082, () => {console.log("Application running at 8082")})