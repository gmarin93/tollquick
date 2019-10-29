const graphql = require('graphql');   
const { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
// const gql= require('graphql-tag');

 let getAll = `
 {
   empresas{
     nombre,
     distrito,
     correo,
     canton,
     provincia
     }
   }
`;

// const addEmpresa = gql`
//     mutation addEmpresa(
//         $nombre: String!,
//         $usuario: String!,
//         $correo: String!,
//         $cedjuridica: String!,
//         $provincia: String!,
//         $canton: String!,
//         $distrito: String!) {
//           addListing(
//             nombre: $nombre,
//             usuario: $usuario,
//             correo: $correo,
//             cedjuridica: $cedjuridica,
//             provincia: $provincia,
//             canton: $canton,
//             distrito:$distrito )
//     }
// `;


// const empresa = new GraphQLObjectType({

//   name:"typeDefs",
//   typeDefs:`
//   {
//     mutation addEmpresa ( $ correo : String , $ nombre : String , $ distrito : String , $ provincia : String , $ canton : String ! ) {       
//       addListing ( correo : $ correo , nombre : $ nombre , distrito : $ distrito , provincia : $ provincia , canton: $ canton ) {      
//         nombre
//         distrito
//         correo
//         provincia
//         canton
//       }
//     }
//   `,
//      resolvers:{
//       empresa: {
//         addListing(root, {input}, context, info){
//           const newEmpresa = {
//             nombre:input.nombre,
//             cedjuridica:input.cedjuridica,
//             distrito:input.distrito,
//             correo:input.correo,
//             provincia:input.provincia,
//             canton:input.canton,
//           };
//           array.push(newEmpresa);
//           return array;
//       }
//     }
//   }
// })

/**
 *   mutation {
  updateEmpresa(
    Id: "5d4082c04349656bac32628e",
    nombre:"Priscilla María Marín Arias",
    distrito: "Aguas Zarcas",
    correo: "prismar09@yahoo.com",
    provincia:"Alajuela",
    canton:"SanCarlos"  
  ) {
    Id
  }
}
  
   {
   empresas{
     nombre,
     distrito,  
     correo,
     canton,
     provincia
     }
   }
  
 mutation {
  deleteEmpresa(Id: "5d4082c04349656bac32628e") {
    Id
  }
}


  {
  empresa(Id: "5d4082c04349656bac32628e") {
     nombre,
     distrito,
     correo,
     canton,
     provincia
  }
}

mutation addEmpresa{    
    addListing(
      nombre:"Glenn",
    distrito: "Aguas",
    correo: "gmail",
    provincia:"Alajuela",
    canton:"SanCarlos"  
    ){
      nombre,distrito,correo,provincia,canton
    }
  }
 */

module.exports = ({
  query:getAll,
  name:'query'
});
