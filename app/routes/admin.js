module.exports = function(appl){
   appl.get('/formulario_inclusao_noticia', function(req,res){
      res.render('admin/form_add_noticia')
   })

   appl.post('/noticias/salvar', function(req,res){
      var noticia =req.body
      // res.send(noticia)
      req.assert('titulo', 'Titulo é obrigatorio').notEmpty()
      req.assert('resumo', 'resumo é obrigatorio').notEmpty()
      req.assert('resumo', 'resumo é obrigatorio').notEmpty()
      req.assert('autor', 'Autor é obrigatorio').notEmpty()     
      req.assert('data_noticia', 'Data é obrigatorio').notEmpty().isDate({format:'YYYY-MM-DD'})      
      req.assert('noticia', 'Noticia é obrigatorio').notEmpty()     

      var erros = req.validationErrors()

      var connection = appl.config.dbConnection()
      var noticiasModel = new appl.app.models.NoticiasDAO(connection)
      noticiasModel.salvarNoticia(noticia, function(error,result){
            res.redirect("/noticias")
      })
   })
}
