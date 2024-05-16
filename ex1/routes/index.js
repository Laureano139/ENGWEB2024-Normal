var express = require('express');
var router = express.Router();
var Contrato = require('../controllers/contrato')
var fs = require('fs')

router.get('/contratos', function(req, res) {
  if(req.query.entidade){
    const ent = req.query.entidade
    Contrato.findByEntity(ent)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  else if(req.query.tipo){
    const t = req.query.tipo
    Contrato.findByType(t)
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
  else{
    Contrato.list()
    .then(data => res.jsonp(data))
    .catch(erro => res.jsonp(erro))
  }
});

router.get('/contratos/entidades', function(req, res) {
  Contrato.findEntidades()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.get('/contratos/tipos', function(req, res) {
  Contrato.findTipos()
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.get('/contratos/:id', function(req, res) {
  Contrato.findById(req.params.id)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.post('/contratos', function(req, res) {
  Contrato.insert(req.body)
  .then(data => res.jsonp(data))
  .catch(erro => res.jsonp(erro))
});

router.delete("/contratos/:id", function(req, res) {
  Contrato.deleteContrato(req.params.id)
    .then(resultado => {
      res.jsonp(resultado)
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na inserção da lista"})
    })
});

router.put('/contratos/:id', function(req, res, next) {
  Contrato.update(req.params.id, req.body)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.jsonp(erro))
});

module.exports = router;