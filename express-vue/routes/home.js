var express = require('express')
var router = express.Router()
var countdown = require('../mixins/countdown')


/*
 Home Page
 */
router.get('/', function(req, res, next){
  res.render('pages/index', {
    data: {
      title: 'UkiGames'
    },
    vue: {
      head: {
        title: 'UkiGames - Home Page',
        head: [
          { property:'og:title', content: 'UkiGames'},
          { name:'twitter:title', content: 'UkiGames'}
        ],
        meta:[
          { style: '/stylesheets/home.css' }
        ]
      },
      components: ['something'],
      mixins: [countdown]
    }
  });
});

module.exports = router


