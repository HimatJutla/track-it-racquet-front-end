const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home listing. */
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/track-it-racquet-front-end/index.html'));
 // res.send('home works');
});

module.exports = router;

//dist\track-it-racquet-front-end