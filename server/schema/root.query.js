const { GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } = require("graphql");
const UserType = require("./uer.type");
const User = require("../models/User");



const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        login: {
            type: UserType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parentValue, { email, password }) {
                try {
                    const user = await User.findOne({ email });
                    if (user.password === password) {
                        return user
                    }


                } catch (err) {
                    console.log(err);
                }
            }
        }

    })
})

module.exports = RootQuery;