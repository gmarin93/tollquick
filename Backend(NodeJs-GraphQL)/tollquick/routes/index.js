var express = require('express');
var router = express.Router();
const graphqlHTTP = require("express-graphql");
var schema = require('../graphql/Schema').Schema;
const { ApolloServer, gql } = require('apollo-server');

var graphql = require('graphql').graphql;
const { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;
//Definiciones de consulta
var empresaQuery = require('../graphql/typeDefs/typeDefs');
var empresaType = require('../graphql/types/empresaType').query;
var graphqlTools= require('graphql-tools');

router.get("/", (req, res) => {
  graphql(schema, empresaQuery.query).then(result => {
    res.json(result);
  }).catch(error => {
    console.log(error);
  })
});

router.use('/', graphqlHTTP(req => ({
  schema,
  graphiql: true,
})))

// //Obtiene todas las empresas inscritas
// router.get('/', async (req, res) => {
//  await Empresa.find()
//   .exec()
//   .then(docs => {
//     console.log(docs);
//     res.status(200).json(docs);
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({
//       error: err
//     });
//   });
// });

// router.post("/", async (req, res, next) => {

//   console.log(req.body);
//   const datos = new Empresa(req.body);
//  await datos
//     .save()
//     .then(result => {
//       console.log(result);
//       res.status(201).json({
//         message: "Handling POST requests to /empresas",
//         createdProduct: result
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });

// router.get("/:empresaId", async (req, res, next) => {
//   const id = req.params.empresaId;
//   await Empresa.findById(id)
//     .exec()
//     .then(doc => {
//       console.log("From database", doc);
//       if (doc) {
//         res.status(200).json(doc);
//       } else {
//         res
//           .status(404)
//           .json({ message: "No valid entry found for provided ID" });
//       }
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// });

// router.patch("/:empresaId", (req, res, next) => {
//   const id = req.params.empresaId;

//   Empresa.update({ _id: id }, { $set: req.body })
//     .exec()
//     .then(result => {
//       console.log(result);
//       res.status(200).json(result);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });


// router.delete("/:empresaId", (req, res, next) => {
//   const id = req.params.empresaId;
//   Empresa.remove({ _id: id })
//     .exec()
//     .then(result => {
//       res.status(200).json(result);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({
//         error: err
//       });
//     });
// });


module.exports = router;
