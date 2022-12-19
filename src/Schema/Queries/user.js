const { GraphQLList, GraphQLString } = require("graphql")
const crud = require("../../model/crud")
const userType = require("../Typedef/userType")

module.exports.USER_LIST={
    type:new GraphQLList(userType),
   
    resolve(parent,args){
        console.log(parent);
        let data=crud.find()
        return data
    }
}
module.exports.USER_BY_EMAIL={
    type:new GraphQLList(userType),
    args:{
        email:{type:GraphQLString}
    },
    resolve(parent,args){
        console.log(parent);
        let data=crud.find({email:args.email})
        return data
    }
}