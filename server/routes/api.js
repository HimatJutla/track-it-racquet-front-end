const express = require('express');
const router = express.Router();
const path = require('path');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
  //res.sendFile(path.join(__dirname, '../../dist/track-it-racquet-front-end/index.html'));
});

module.exports = router;