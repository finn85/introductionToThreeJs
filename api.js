const express = require('express');
const api = express();
const port = 3000;
const staticFiles = [
  '/js/libs/three.js',
  '/js/libs/OrbitControls.js',
  '/js/3dVisualization.js'
];

api.listen(port, () => console.log(`[Introduction to ThreeJs] API listening on port ${port}!`));

api.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

for(let i = 0; i < staticFiles.length; i++){
  api.get(staticFiles[i], (req, res) => {
    res.sendFile(__dirname + staticFiles[i]);
  })
}