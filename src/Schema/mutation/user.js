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
        crud.create(args);
        return args
    }
}

module.exports.UPDATE_USER={
    type:userType,
    args:{
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        address:{type:GraphQLString}
    },
    resolve:async(parent,args)=>{
        await crud.updateOne({email:args.email},args);
        return args
    }
}

module.exports.DELETE_USER={
    type:userType,
    args:{
        email:{type:GraphQLString}
    },
    resolve:async(parent,args)=>{
        await crud.deleteOne({email:args.email});
        return args
    }
}