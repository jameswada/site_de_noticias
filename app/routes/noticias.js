module.exports = function(appl){
      appl.get('/noticias', function(req,res){
            var connection = appl.config.dbConnection()
            var noticiasModel = new appl.app.models.NoticiasDAO(connection)
            noticiasModel.getNoticias(function(error,result){
                  res.render("noticias/noticias",{noticias:result})
            })
      })
}