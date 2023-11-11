// Importar el módulo express
const express = require('express');
const path = require('path');

// Crear una aplicación express
const app = express();

// Configurar el directorio de archivos estáticos (como archivos HTML, CSS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para cargar el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Configurar el servidor para escuchar en el puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});