var express = require('express')
var router = express.Router()


var games = [];
games.push({ id: 1, name: 'Dash Legends', age: 12 });
games.push({ id: 2, name: 'Game 2', age: 14  });
games.push({ id: 3, name: 'Game 3', age: 16  });


/*
 Games Page
 */
router.get('/', function(req, res){
  res.render('pages/game-page', {
    data: {
      title: 'Games',
      games: games
    },
    vue: {
      head: {
        title: 'UkiGames - Games Page'
      },
      components: ['something', 'games']
    }
  });
});

module.exports = router
