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
                email: { type: GraphQLString },
                password: { type: GraphQLString },

            },
            async resolve(parentValue, { name, email, password }) {
                const user = new User({ name, email, password })
                try {
                    const doc = await user.save();
                    return doc;

                } catch (err) {
                    console.log(err)
                }
            }
        }
    })

})
module.exports = mutation;