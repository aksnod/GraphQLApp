const { GraphQLList, GraphQLString } = require("graphql")
const crud = require("../../model/crud")
const userType = require("../Typedef/userType")

module.exports.USER_Add={
    type:userType,
    args:{
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        address:{type:GraphQLString}
    },
    resolve(parent,args){
        
        return args
    }
}