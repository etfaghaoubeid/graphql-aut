const { GraphQLSchema } = require("graphql");
const RootQuery = require("./root.query");
const mutations = require("./mutation");



const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: mutations
});

module.exports = schema;