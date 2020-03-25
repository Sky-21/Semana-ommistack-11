const express = require('express')

const connection = require('./database/conenction')

const OngController = require('./Controllers/OngController')
const IncidentController= require('./Controllers/IncidentController')
const ProfileController = require('./Controllers/ProfileController')
const SessionController = require('./Controllers/SessionController')


const routes = express.Router()

routes.post('/session', SessionController.create)

routes.get('/ongs', OngController.index)

routes.post('/ongs' , OngController.create)


routes.get('/profile', ProfileController.index)

routes.post('/incidents' , IncidentController.create)
routes.get('/incidents', IncidentController.index)
routes.delete('/incidents/:id', IncidentController.destroy)
module.exports = routes