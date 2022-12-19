const { GraphQLObjectType, GraphQLInt, GraphQLString } = require("graphql")

const userType=new GraphQLObjectType({
    name:'user',
    fields:()=>({
        id:{type:GraphQLInt},
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        address:{type:GraphQLString}
    })
})

module.exports=userType