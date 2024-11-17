import express from 'express';
const app = express();

app.get('/', (req, res) => res.send('Express on Vercel'));

// Exporta la aplicación sin app.listen
export default app;
