const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()
app.use(cors())





app.use(express.json())
app.use(routes)

app.listen(3333)


/*





  Get:buscar informação
  Post:Criar uma informação 
  Put:Alterar uma informação
  Delete:Deletar uma informação


*/ 


/*
 Parametro


 Query: url params
 Route Params:indentificar recursos 
 Body: Criar ou alterar
*/ 
/* 
  Driver: Select * from users
  Query Builder: table('users').select('*').where

*/
/*
  SQL: mySql , Sqlite, PostgreSQL , Oracle, microfsoft SQL Server
  NoSQL:MongoDB , CouchDb, etc
*/ 