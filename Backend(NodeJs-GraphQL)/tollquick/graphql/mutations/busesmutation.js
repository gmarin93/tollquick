const graphql = require('graphql');
const { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;


  const Updatemutation = new GraphQLObjectType({
    name: 'UpdateMutation',
    description: 'Change or create listing',
    fields: () => {
      return{
            Id: {
              type: new GraphQLNonNull(GraphQLString)
            },
            nombre: {
              name: "nombre",
              type: GraphQLString,
            },
            usuario: {
              name: "usuario",
              type: GraphQLString,
            },
            correo: {
              name: "correo",
              type: GraphQLString,
            },
            cedjuridica: {
              name: "cedjuridica",
              type: GraphQLString,
            },
            provincia: {
              name: "provincia",
              type: GraphQLString,
            },
            canton: {
              name: "canton",
              type: GraphQLString,
            },
            distrito: {
              name: "distrito",
              type: GraphQLString,
            }
      }
    },
  });
  

module.exports = ({
  // query: empresaMutation,
  update:Updatemutation,
  name: 'empresaMutation'
});
