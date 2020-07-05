const { GraphQLInputObjectType, GraphQLID, GraphQLString } = require("graphql");



const UserType = new GraphQLInputObjectType({
    name: 'UserType',
    fields: () => ({
        id: { type: GraphQLID },
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        }
    })

})


module.exports = UserType;