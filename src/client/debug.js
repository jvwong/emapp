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

let domReady = require('fready');
let livereload = require('./livereload');

let debug = {
  enabled: !!window.DEBUG,

  init: function(){
    domReady( livereload );
  }
};

module.exports = debug;
