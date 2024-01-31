const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Handle form submission
router.post('/results', (req, res) => {
  console.log('Form submitted!');
  const size = req.body.size;
  console.log('Size:', size);

  // Process form data and render results view
  res.render('results', { size });
});

module.exports = router;
