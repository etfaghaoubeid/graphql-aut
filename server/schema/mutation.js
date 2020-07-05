const UserType = require('./uer.type');
const User = require('../models/User');
const { GraphQLObjectType, GraphQLString } = require('graphql');

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createUser: {
            type: UserType,
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString }
            },
            async resolve(parentValue, { name, email }) {

                const user = new User({ name, email })
                try {
                    const doc = await user.save();
                    return doc;

                } catch (error) {
                    console.log(err)
                }
            }
        }
    })

})
module.exports = mutation;