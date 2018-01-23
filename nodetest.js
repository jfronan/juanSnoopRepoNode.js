'use strict'


const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

	//console.log(req.body)
	//res.status(404).send({message: 'El producto no existe'})
//)

mongoose.connect(config.db, (err,res) => {
	if (err) {
		return console.log(`Error al conectar a la db error: ${err}`)
	}
	console.log('coneccion establecida')


/*app.get('/hola/:name', (req, res) => {
	res.send({ message: `Hola ${req.params.name}!` })
})*/

app.listen(config.port, () => {
	console.log(`API REST corriendo en local host port ${config.port}`)
})
})
