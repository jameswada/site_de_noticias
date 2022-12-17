var app = require ('./config/server')

// var rotaNoticias = require('./app/routes/noticias')(app)

// var rotaHome = require('./app/routes/home')(app)

// var rotaFormInclusaoNoticia = require('./app/routes/form_add_noticia')(app)


app.listen(3000, function(){
   console.log('servidor(3000) com express')
   // console.log(msg())
})