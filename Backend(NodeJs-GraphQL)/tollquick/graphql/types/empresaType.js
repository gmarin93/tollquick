const graphql = require('graphql');   
const {GraphQLInputObjectType, GraphQLList,GraphQLNonNull,GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
  
  var empresaType = new GraphQLObjectType({
    name: 'empresa',
    fields: () => {
      return {
        _id: {
          type: (GraphQLString)
        },
        nombre: {
          type: GraphQLString,
        },
        correo: {
          type: GraphQLString,
        },
        cedulajuridica: {
          type: GraphQLString,
        },
        provincia: {
          type: GraphQLString,
        },
        canton: {
          type: GraphQLString,
        },
        distrito: {
          type: GraphQLString,
        },
        direccion:{
          type:GraphQLString,
        },
        telefono:{
          type:GraphQLString,
        },
        logo:{
          type:GraphQLString,
        }
      }
    }
  }); 
  

module.exports = ({
  query:empresaType,
  name:'empresaType'
});
