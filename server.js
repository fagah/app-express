const express = require('express')
const app = express()
const port = 1000
// Utiles pour la communication avec la BD
const { Sequelize } = require('sequelize');
const { QueryTypes } = require('sequelize');
const sequelize = new Sequelize('BIBLIO', 'root', 'sejen@2018!', {
        host: 'localhost',
        dialect: 'mysql'
});

/**
 * Premier exmple de route
 */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users', async (req, res) => {

    const clients = await sequelize.query("SELECT * FROM `client`", { type: QueryTypes.SELECT });
    res.send(`Total lignes : ${clients.length} `)
  })

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})