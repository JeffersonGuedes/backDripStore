const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
          response.send('Deu certo')
});

module.exports = router;