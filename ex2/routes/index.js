var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:16000/contratos")
  .then(resp => {
      var contratos = resp.data
      res.status(200).render("index", {"lContratos" : contratos, "data" : d})
  })
  .catch(erro => {
      res.status(501).render("error", {"error" : erro})
  })
});

router.get('/:idContrato', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:16000/contratos/" + req.params.idContrato)
  .then(resp => {
      var contrato = resp.data
      res.status(200).render("idContrato", {"contrato" : contrato, "data" : d})
  })
  .catch(erro => {
      res.status(501).render("error", {"error" : erro})
  })
});

router.get('/entidades/:idEntidade', function(req, res, next) {
  var d = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:16000/contratos?entidade=" + req.params.idEntidade)
  .then(resp => {
    var entidade = resp.data
    var totalPrecoContratual = entidade.reduce((total, item) => {
      return total + (item.precoContratual || 0)
    }, 0);
    res.status(200).render("entidades", {"entidade" : entidade, "data" : d, "resSoma" : totalPrecoContratual})
  })
  .catch(erro => {
      res.status(501).render("error", {"error" : erro})
  })
});

module.exports = router;
