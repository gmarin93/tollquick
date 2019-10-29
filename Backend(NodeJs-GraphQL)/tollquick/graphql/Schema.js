const graphql = require('graphql');   
const { GraphQLList,GraphQLNonNull,GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
var query=require ('../graphql/queries/empresaQuery').Schema;
var mutation=require ('../graphql/mutations/empresamutation').guardar;


const schema = new GraphQLSchema({
 name:'empresaQuery',
 query: query,
 mutation,
});

module.exports =({
  Schema:schema,
});