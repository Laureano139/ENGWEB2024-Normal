var mongoose = require("mongoose")
const { modelName } = require("../models/contrato")
var Contrato = require("../models/contrato")

module.exports.list = async () => {
  return await Contrato
    .find()
    .exec();
}

module.exports.findById = id => {
  return Contrato
    .findOne({ _id : id })
    .exec();
}

module.exports.findByEntity = ent => {
  return Contrato
  .find({NIPC_entidade_comunicante : ent})
  .exec()
}

module.exports.findByType = t => {
  return Contrato
  .find({tipoprocedimento : t})
  .exec()
}

module.exports.findEntidades = () => {
  return Contrato
  .distinct("entidade_comunicante")
  .sort({entidade_comunicante : 1})
  .exec()
}

module.exports.findTipos = () => {
  return Contrato
  .distinct("tipoprocedimento")
  .sort({tipoprocedimento : 1})
  .exec()
}

module.exports.insert = c => {
  if((Contrato.find({_id : c._id}).exec()).length != 1){
      var newContrato = new Contrato(c)
      return newContrato.save()
  }
}

module.exports.deleteContrato = async id => {
  return Contrato.deleteOne({_id:id})
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.update = (id, con) => {
    return Contrato
        .findByIdAndUpdate(id, con, {new : true})
        .exec()
}