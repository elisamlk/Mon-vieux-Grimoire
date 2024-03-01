const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const app = express();

mongoose.connect('mongodb+srv://elisabethmalek:Kathleen4@clusterelisabeth.5m2d624.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

// Utilisation des routes signin et login
app.use('/api/auth', userRoutes);

// Utilisation des routes books

// app.use('/api/books', bookRoutes);





module.exports = app;