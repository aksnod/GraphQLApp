const { GraphQLList } = require("graphql")
const crud = require("../../model/crud")
const userType = require("../Typedef/userType")

module.exports.USER_LIST={
    type:new GraphQLList(userType),
    resolve(parent,args){
        let data=crud.find()
        return data
    }
}