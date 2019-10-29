const graphql = require('graphql');
const { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
var empresaType = require('../../graphql/types/empresaType').query;
var controller = require('../resolvers/empresa');


const mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Change or create listing',
  fields: () => ({
    addListing: {
       type: (empresaType),
      description: 'add a new listing',
      args: {
        nombre: {
          name: "nombre",
          type:  new GraphQLNonNull (GraphQLString),
        },
        correo: {
          name: "correo",
          type:  new GraphQLNonNull (GraphQLString),
        },
        cedulajuridica: {
          name: "cedulajuridica",
          type:   (GraphQLString),
        },
        provincia: {
          name: "provincia",
          type:  new GraphQLNonNull (GraphQLString),
        },
        canton: {
          name: "canton",
          type:  (GraphQLString),
        },
        distrito: {
          name: "distrito",
          type:  new GraphQLNonNull (GraphQLString),
        },
        direccion: {
          name: "direccion",
          type:  new GraphQLNonNull (GraphQLString),
        },
        telefono: {
          name: "telefono",
          type:  new GraphQLNonNull (GraphQLString),
        },
        logo: {
          name: "logo",
          type:  new GraphQLNonNull (GraphQLString),
        }
      },
      resolve(parentValue, args) {

        if(args.nombre==='' || args.direccion==='' || args.correo==='' || args.cedulajuridica==='' || args.provincia==='' || args.canton ==='' || args.distrito===''){
          return new Error;
        }

       return controller.addNewListing(args); 
      },

    }, updateEmpresa: {
      type: (empresaType),
     description: 'add a new listing',
     args: {
       _id: {
         type: new GraphQLNonNull(GraphQLString)
       },
       nombre: {
         name: "nombre",
         type: GraphQLString,
       },
       direccion: {
         name: "direccion",
         type: GraphQLString,
       },
       correo: {
         name: "correo",
         type: GraphQLString,
       },
       cedulajuridica: {
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
       },
       telefono: {
        name: "telefono",
        type: GraphQLString,
      },
      logo: {
        name: "logo",
        type: GraphQLString,
      }
     },
     resolve(parentValue, args) {
      return controller.updateListing(args); 
     },

   },deleteEmpresa: {
      type: empresaType,
      description: 'delete a listing',
      args: {
        _id: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return controller.deleteListing(args);
      },
    }
   //
    
    //,
    // updateListing: {
    //   type: ListingType,
    //   description: 'update an existing listing',
    //   args: {
    //     _id: { type: new GraphQLNonNull(GraphQLString) },
    //     name: { type: new GraphQLNonNull(GraphQLString) },
    //   },
    //   resolve(parentValue, args) {
    //     return updateListing(args);
    //   },
    // },
    // deleteListing: {
    //   type: ListingType,
    //   description: 'delete a listing',
    //   args: {
    //     _id: { type: new GraphQLNonNull(GraphQLString) },
    //   },
    //   resolve(parentValue, args) {
    //     return deleteListing(args);
    //   },
    // },
    // seedDatabase: {
    //   type: GraphQLList(ListingType),
    //   description: 'seed the database with initial values',
    //   resolve() {
    //     return seedDB();
    //   },
    // },
    
  }),
});

module.exports = ({
  guardar: mutation,
  name: 'empresaMutation'
});