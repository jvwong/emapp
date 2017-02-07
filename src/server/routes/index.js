/*
 *
 *  ___      _   _                       ___
 * | _ \__ _| |_| |___ __ ____ _ _  _   / __|___ _ __  _ __  ___ _ _  ___
 * |  _/ _` |  _| ' \ V  V / _` | || | | (__/ _ \ '  \| '  \/ _ \ ' \(_-<
 * |_| \__,_|\__|_||_\_/\_/\__,_|\_, |  \___\___/_|_|_|_|_|_\___/_||_/__/
 *                               |__/
 * https://github.com/PathwayCommons/
 *
 */
 
var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', {
    development: req.app.get('env') === 'development'
  });
});

module.exports = router;
