
const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { USER_Add } = require('./mutation/user');
const { USER_LIST } = require('./Queries/user');





const rootQuery=new GraphQLObjectType({
    name:'xyz',
    fields:{
        codeimporove:USER_LIST,
        shyam:USER_LIST

    }

})
const rootMutation=new GraphQLObjectType({
    name:'z',
    fields:{
        create_user:USER_Add

    }

})

module.exports=new GraphQLSchema({query:rootQuery,mutation:rootMutation})