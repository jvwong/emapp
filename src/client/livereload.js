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

module.exports = function appendScript(){
  let script = document.createElement('script');
  script.src = 'http://' + window.location.hostname + ':35729/livereload.js';

  document.head.insertBefore( script, document.head.firstChild );
};
