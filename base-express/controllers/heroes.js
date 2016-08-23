var express = require('express')
    //, partials = require('express-partials')
    , router = express.Router()
    , Hero = require('../models/hero')



router.get('/:id', function(req, res) {
    Hero.get(req.params.id, function (err, hero) {
        res.render('heroes/hero', {hero: hero})
    })
})

router.get('/', function(req, res) {
    Hero.all(function (err, heroes) {
        res.render('heroes/heroes', {heroes: heroes})
    })
})

module.exports = router;
