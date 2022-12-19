const express=require('express');
const { graphqlHTTP } = require('express-graphql');
const db = require('./src/config/mongoose');
const schema =require('./src/Schema/index');

const app=express();
const PORT=3000;


app.use(express.json());
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true,
    rootValue:{token:"shyamdfdsfd"}

}))


app.listen(PORT,(err)=>{
    if(!err)
    console.log("Server is running on port ", PORT);
})