const express = require('express');
const cors = require('cors'); // CORS importieren
const http = require('http');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// CORS aktivieren für alle Ursprünge
app.use(cors({
  origin: 'http://localhost:3000', // Nur Frontend-URL zulassen
  methods: ['GET', 'POST'], // Die Methoden, die du erlauben möchtest
  allowedHeaders: ['Content-Type', 'Authorization'], // Erlaubte Header
}));

// Proxy-Route einrichten
app.use('/setColor', createProxyMiddleware({
  target: 'http://192.168.178.25', // IP des ESP32
  changeOrigin: true,
  pathRewrite: {
    '^/setColor': '/setColor', // Wenn notwendig, passt dies an
  },
}));

// Server starten
const port = 3001;
app.listen(port, () => {
  console.log(`Proxy-Server läuft auf http://localhost:${port}`);
});
