const app = require ('./app');

const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.DB_PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server running or port  http://localhost:${PORT}`)
});