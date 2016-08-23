var express = require('express')
    , router = express.Router()
    , partial = require('express-partial');

router.use('/comments', require('./comments'))
router.use('/heroes', require('./heroes'))
router.use('/users', require('./users'))


router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router