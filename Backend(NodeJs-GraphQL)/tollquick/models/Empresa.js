var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newSchema = new Schema({
  // '_id': {type:String},
  'nombre': { type: String },
  'telefono': { type: String },
  'correo': { type: String },
  'cedulajuridica': { type: String },
  'direccion': { type: String },
  'provincia': { type: String },
  'canton': { type: String },
  'distrito': { type: String },
  'logo': { type: String },
  'createdAt': { type: Date, default: Date.now },
  'updatedAt': { type: Date, default: Date.now }
});

newSchema.pre('save', function(next){
  this.updatedAt = Date.now();
  next();
});

newSchema.pre('update', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

newSchema.pre('findOneAndUpdate', function() {
  this.update({}, { $set: { updatedAt: Date.now() } });
});

module.exports = mongoose.model('empresas', newSchema);
