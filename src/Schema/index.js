
const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const { USER_Add,UPDATE_USER, DELETE_USER } = require('./mutation/user');
const { USER_LIST, USER_BY_EMAIL } = require('./Queries/user');





const rootQuery=new GraphQLObjectType({
    name:'crud_query',
    fields:{
        user_list:USER_LIST,
        user_by_mail:USER_BY_EMAIL

    }

})
const rootMutation=new GraphQLObjectType({
    name:'crud_mutation',
    fields:{
        create_user:USER_Add,
        update_user:UPDATE_USER,
        delete_user:DELETE_USER

    }

})

module.exports=new GraphQLSchema({query:rootQuery,mutation:rootMutation})