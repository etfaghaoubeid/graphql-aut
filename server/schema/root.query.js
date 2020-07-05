const { GraphQLObjectType, GraphQLID, GraphQLNonNull } = require("graphql");
const UserType = require("./uer.type");
const User = require("../models/User");



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        login: {
            type: UserType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) } },
            async resolve(parentValue, { id }) {
                try {
                    const user = await User.findById(id);
                    return user;

                } catch (err) {
                    console.log(err);
                }
            }
        }

    })
})

module.exports = RootQuery;