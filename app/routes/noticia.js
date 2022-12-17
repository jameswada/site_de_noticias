module.exports = function(appl){   
   appl.get('/noticia', function(req,res){
      var connection = appl.config.dbConnection()
      var noticiaModel = new appl.app.models.NoticiasDAO(connection)
      noticiaModel.getNoticia(function(error,result){
         res.render("noticias/noticia",{noticia:result}) 
      })
   })
}
