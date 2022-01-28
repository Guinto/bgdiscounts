var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    request({ url: "https://api.boardgameatlas.com/api/search?order_by=rank&gt_discount=0.4&client_id=55QzrLZsXp" } , function(err, response, jsonString) {
        var json = JSON.parse(jsonString);
        var games = json.games
        var options = {
            title: 'Board Game Discounts',
            games: games
        }
        res.render('index', options);
    });
});

module.exports = router;
