const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use('/', (req, res) => {
  return res.send('Welcome to the API! Please use api tools to work with Database');
});


router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
