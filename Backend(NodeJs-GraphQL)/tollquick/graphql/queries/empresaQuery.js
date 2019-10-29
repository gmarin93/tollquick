const graphql = require('graphql');
const { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
var empresaType = require('../../graphql/types/empresaType').query;
var controller = require('../resolvers/empresa');


const reports = new GraphQLObjectType({
  name: 'Querys',
  fields: function () {
    return {
      empresas: {
        type: new GraphQLList(empresaType),
        args: {
        },
        resolve(parent, args) {
          const empresas = controller.getAllListings();//Empresa.find().exec()
          if (!empresas) {
            throw new Error('Error')
          }
          return empresas
        }
      },
      empresa:{
        type: (empresaType),
        args: {
          Id: {
            name: 'Id',
            type: GraphQLString
          }
        },
        resolve(parent, args) {
          const empresas = controller.getSingleListing(args.Id);//Empresa.find().exec()
          if (!empresas) {
            throw new Error('Error')
          }
          return empresas
        }
      }
    }
  }
});


module.exports = ({
  Schema: reports,
  name: 'empresaQuery'
});