(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client/Workflow/Workflow.js":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var FileInputStep = require('./components/FileInputStep.js');

var Workflow = function (_React$Component) {
  _inherits(Workflow, _React$Component);

  function Workflow(props) {
    _classCallCheck(this, Workflow);

    return _possibleConstructorReturn(this, (Workflow.__proto__ || Object.getPrototypeOf(Workflow)).call(this, props));
  }

  _createClass(Workflow, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Workflow: ',
          this.props.name
        ),
        React.createElement(FileInputStep, { name: 'Data Munge' })
      );
    }
  }]);

  return Workflow;
}(React.Component);

Workflow.propTypes = {};

module.exports = Workflow;

},{"./components/FileInputStep.js":"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client/Workflow/components/FileInputStep.js","react":"react"}],"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client/Workflow/components/FileInputStep.js":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var Step = require('./Step.js');

var FileInputStep = function (_React$Component) {
  _inherits(FileInputStep, _React$Component);

  function FileInputStep(props) {
    _classCallCheck(this, FileInputStep);

    return _possibleConstructorReturn(this, (FileInputStep.__proto__ || Object.getPrototypeOf(FileInputStep)).call(this, props));
  }

  _createClass(FileInputStep, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        Step,
        { name: 'Metadata Input' },
        React.createElement(
          'p',
          null,
          'Some extra bloat'
        )
      );
    }
  }]);

  return FileInputStep;
}(React.Component);

module.exports = FileInputStep;

},{"./Step.js":"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client/Workflow/components/Step.js","react":"react"}],"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client/Workflow/components/Step.js":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Step = function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step(props) {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, (Step.__proto__ || Object.getPrototypeOf(Step)).call(this, props));
  }

  _createClass(Step, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.name
        ),
        this.props.children
      );
    }
  }]);

  return Step;
}(React.Component);

Step.propTypes = {
  name: React.PropTypes.string
};

module.exports = Step;

},{"react":"react"}],"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client/debug.js":[function(require,module,exports){
'use strict';

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

var domReady = require('fready');
var livereload = require('./livereload');

var debug = {
  enabled: !!window.DEBUG,

  init: function init() {
    domReady(livereload);
  }
};

module.exports = debug;

},{"./livereload":"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client/livereload.js","fready":"fready"}],"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client/livereload.js":[function(require,module,exports){
'use strict';

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

module.exports = function appendScript() {
  var script = document.createElement('script');
  script.src = 'http://' + window.location.hostname + ':35729/livereload.js';

  document.head.insertBefore(script, document.head.firstChild);
};

},{}],"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client":[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _debug = require('./debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  ___      _   _                       ___
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * | _ \__ _| |_| |___ __ ____ _ _  _   / __|___ _ __  _ __  ___ _ _  ___
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * |  _/ _` |  _| ' \ V  V / _` | || | | (__/ _ \ '  \| '  \/ _ \ ' \(_-<
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * |_| \__,_|\__|_||_\_/\_/\__,_|\_, |  \___\___/_|_|_|_|_|_\___/_||_/__/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *                               |__/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/PathwayCommons/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// ----------   Begin Debug   ------------------------------------------------//


if (_debug2.default.enabled) _debug2.default.init();
// ----------   End Debug   --------------------------------------------------//


// ----------   Begin React App   --------------------------------------------//
var React = require('react');
var ReactDOM = require('react-dom');
var Workflow = require('./Workflow/Workflow.js');

var appRootId = 'root';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Workflow, { name: 'EM' })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById(appRootId));
// ----------   End React App   ----------------------------------------------//

},{"./Workflow/Workflow.js":"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client/Workflow/Workflow.js","./debug":"/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client/debug.js","babel-polyfill":"babel-polyfill","react":"react","react-dom":"react-dom"}]},{},["/Users/jeffreywong/Projects/PathwayCommons/web/emapp/src/client"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY2xpZW50L1dvcmtmbG93L1dvcmtmbG93LmpzIiwic3JjL2NsaWVudC9Xb3JrZmxvdy9jb21wb25lbnRzL0ZpbGVJbnB1dFN0ZXAuanMiLCJzcmMvY2xpZW50L1dvcmtmbG93L2NvbXBvbmVudHMvU3RlcC5qcyIsInNyYy9jbGllbnQvZGVidWcuanMiLCJzcmMvY2xpZW50L2xpdmVyZWxvYWQuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FDQUEsSUFBTSxRQUFRLFFBQVEsT0FBUixDQUFkO0FBQ0EsSUFBTSxnQkFBZ0IsUUFBUSwrQkFBUixDQUF0Qjs7SUFFTSxROzs7QUFDSixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsK0dBQ1gsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBZSxlQUFLLEtBQUwsQ0FBVztBQUExQixTQURGO0FBRUUsNEJBQUMsYUFBRCxJQUFlLE1BQUssWUFBcEI7QUFGRixPQURGO0FBTUQ7Ozs7RUFab0IsTUFBTSxTOztBQWU3QixTQUFTLFNBQVQsR0FBcUIsRUFBckI7O0FBR0EsT0FBTyxPQUFQLEdBQWlCLFFBQWpCOzs7Ozs7Ozs7Ozs7O0FDckJBLElBQU0sUUFBUSxRQUFRLE9BQVIsQ0FBZDtBQUNBLElBQU0sT0FBTyxRQUFRLFdBQVIsQ0FBYjs7SUFFTSxhOzs7QUFDSix5QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUhBQ1gsS0FEVztBQUVsQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQyxZQUFEO0FBQUEsVUFBTSxNQUFLLGdCQUFYO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BREY7QUFLRDs7OztFQVh5QixNQUFNLFM7O0FBY2xDLE9BQU8sT0FBUCxHQUFpQixhQUFqQjs7Ozs7Ozs7Ozs7OztBQ2pCQSxJQUFNLFFBQVEsUUFBUSxPQUFSLENBQWQ7O0lBRU0sSTs7O0FBQ0osZ0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVHQUNYLEtBRFc7QUFFbEI7Ozs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFNLGVBQUssS0FBTCxDQUFXO0FBQWpCLFNBREY7QUFFSSxhQUFLLEtBQUwsQ0FBVztBQUZmLE9BREY7QUFNRDs7OztFQVpnQixNQUFNLFM7O0FBZXpCLEtBQUssU0FBTCxHQUFpQjtBQUNmLFFBQU0sTUFBTSxTQUFOLENBQWdCO0FBRFAsQ0FBakI7O0FBSUEsT0FBTyxPQUFQLEdBQWlCLElBQWpCOzs7OztBQ3JCQTs7Ozs7Ozs7Ozs7QUFXQSxJQUFJLFdBQVcsUUFBUSxRQUFSLENBQWY7QUFDQSxJQUFJLGFBQWEsUUFBUSxjQUFSLENBQWpCOztBQUVBLElBQUksUUFBUTtBQUNWLFdBQVMsQ0FBQyxDQUFDLE9BQU8sS0FEUjs7QUFHVixRQUFNLGdCQUFVO0FBQ2QsYUFBVSxVQUFWO0FBQ0Q7QUFMUyxDQUFaOztBQVFBLE9BQU8sT0FBUCxHQUFpQixLQUFqQjs7Ozs7QUN0QkE7Ozs7Ozs7Ozs7O0FBV0EsT0FBTyxPQUFQLEdBQWlCLFNBQVMsWUFBVCxHQUF1QjtBQUN0QyxNQUFJLFNBQVMsU0FBUyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQSxTQUFPLEdBQVAsR0FBYSxZQUFZLE9BQU8sUUFBUCxDQUFnQixRQUE1QixHQUF1QyxzQkFBcEQ7O0FBRUEsV0FBUyxJQUFULENBQWMsWUFBZCxDQUE0QixNQUE1QixFQUFvQyxTQUFTLElBQVQsQ0FBYyxVQUFsRDtBQUNELENBTEQ7Ozs7Ozs7QUNBQTs7QUFHQTs7Ozs7Ozs7OzsrZUFkQTs7Ozs7Ozs7Ozs7QUFhQTs7O0FBQzZCLElBQUksZ0JBQU0sT0FBVixFQUFvQixnQkFBTSxJQUFOO0FBQ2pEOzs7QUFHQTtBQUNBLElBQU0sUUFBUSxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU0sV0FBVyxRQUFTLFdBQVQsQ0FBakI7QUFDQSxJQUFNLFdBQVcsUUFBUyx3QkFBVCxDQUFqQjs7QUFFQSxJQUFNLFlBQVksTUFBbEI7O0lBRU0sRzs7O0FBRUosZUFBYSxLQUFiLEVBQXFCO0FBQUE7O0FBQUEscUdBQ1osS0FEWTtBQUVwQjs7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsUUFBRCxJQUFVLE1BQUssSUFBZjtBQURGLE9BREY7QUFLRDs7OztFQVplLE1BQU0sUzs7QUFleEIsU0FBUyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUUsU0FBUyxjQUFULENBQXlCLFNBQXpCLENBRkY7QUFJQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBGaWxlSW5wdXRTdGVwID0gcmVxdWlyZSgnLi9jb21wb25lbnRzL0ZpbGVJbnB1dFN0ZXAuanMnKTtcblxuY2xhc3MgV29ya2Zsb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPldvcmtmbG93OiB7dGhpcy5wcm9wcy5uYW1lfTwvaDE+XG4gICAgICAgIDxGaWxlSW5wdXRTdGVwIG5hbWU9XCJEYXRhIE11bmdlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuV29ya2Zsb3cucHJvcFR5cGVzID0ge1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBXb3JrZmxvdztcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFN0ZXAgPSByZXF1aXJlKCcuL1N0ZXAuanMnKTtcblxuY2xhc3MgRmlsZUlucHV0U3RlcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8U3RlcCBuYW1lPVwiTWV0YWRhdGEgSW5wdXRcIj5cbiAgICAgICAgPHA+U29tZSBleHRyYSBibG9hdDwvcD5cbiAgICAgIDwvU3RlcD5cbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsZUlucHV0U3RlcDtcbiIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY2xhc3MgU3RlcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+eyB0aGlzLnByb3BzLm5hbWUgfTwvaDE+XG4gICAgICAgIHsgdGhpcy5wcm9wcy5jaGlsZHJlbiB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblN0ZXAucHJvcFR5cGVzID0ge1xuICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0ZXA7XG4iLCIvKlxuICpcbiAqICBfX18gICAgICBfICAgXyAgICAgICAgICAgICAgICAgICAgICAgX19fXG4gKiB8IF8gXFxfXyBffCB8X3wgfF9fXyBfXyBfX19fIF8gXyAgXyAgIC8gX198X19fIF8gX18gIF8gX18gIF9fXyBfIF8gIF9fX1xuICogfCAgXy8gX2AgfCAgX3wgJyBcXCBWICBWIC8gX2AgfCB8fCB8IHwgKF9fLyBfIFxcICcgIFxcfCAnICBcXC8gXyBcXCAnIFxcKF8tPFxuICogfF98IFxcX18sX3xcXF9ffF98fF9cXF8vXFxfL1xcX18sX3xcXF8sIHwgIFxcX19fXFxfX18vX3xffF98X3xffF9cXF9fXy9ffHxfL19fL1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfF9fL1xuICogaHR0cHM6Ly9naXRodWIuY29tL1BhdGh3YXlDb21tb25zL1xuICpcbiAqL1xuXG5sZXQgZG9tUmVhZHkgPSByZXF1aXJlKCdmcmVhZHknKTtcbmxldCBsaXZlcmVsb2FkID0gcmVxdWlyZSgnLi9saXZlcmVsb2FkJyk7XG5cbmxldCBkZWJ1ZyA9IHtcbiAgZW5hYmxlZDogISF3aW5kb3cuREVCVUcsXG5cbiAgaW5pdDogZnVuY3Rpb24oKXtcbiAgICBkb21SZWFkeSggbGl2ZXJlbG9hZCApO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVnO1xuIiwiLypcbiAqXG4gKiAgX19fICAgICAgXyAgIF8gICAgICAgICAgICAgICAgICAgICAgIF9fX1xuICogfCBfIFxcX18gX3wgfF98IHxfX18gX18gX19fXyBfIF8gIF8gICAvIF9ffF9fXyBfIF9fICBfIF9fICBfX18gXyBfICBfX19cbiAqIHwgIF8vIF9gIHwgIF98ICcgXFwgViAgViAvIF9gIHwgfHwgfCB8IChfXy8gXyBcXCAnICBcXHwgJyAgXFwvIF8gXFwgJyBcXChfLTxcbiAqIHxffCBcXF9fLF98XFxfX3xffHxfXFxfL1xcXy9cXF9fLF98XFxfLCB8ICBcXF9fX1xcX19fL198X3xffF98X3xfXFxfX18vX3x8Xy9fXy9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxfXy9cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9QYXRod2F5Q29tbW9ucy9cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhcHBlbmRTY3JpcHQoKXtcbiAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gJ2h0dHA6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJzozNTcyOS9saXZlcmVsb2FkLmpzJztcblxuICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZSggc2NyaXB0LCBkb2N1bWVudC5oZWFkLmZpcnN0Q2hpbGQgKTtcbn07XG4iLCIvKlxuICpcbiAqICBfX18gICAgICBfICAgXyAgICAgICAgICAgICAgICAgICAgICAgX19fXG4gKiB8IF8gXFxfXyBffCB8X3wgfF9fXyBfXyBfX19fIF8gXyAgXyAgIC8gX198X19fIF8gX18gIF8gX18gIF9fXyBfIF8gIF9fX1xuICogfCAgXy8gX2AgfCAgX3wgJyBcXCBWICBWIC8gX2AgfCB8fCB8IHwgKF9fLyBfIFxcICcgIFxcfCAnICBcXC8gXyBcXCAnIFxcKF8tPFxuICogfF98IFxcX18sX3xcXF9ffF98fF9cXF8vXFxfL1xcX18sX3xcXF8sIHwgIFxcX19fXFxfX18vX3xffF98X3xffF9cXF9fXy9ffHxfL19fL1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfF9fL1xuICogaHR0cHM6Ly9naXRodWIuY29tL1BhdGh3YXlDb21tb25zL1xuICpcbiAqL1xuXG5pbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJztcblxuLy8gLS0tLS0tLS0tLSAgIEJlZ2luIERlYnVnICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbmltcG9ydCBkZWJ1ZyBmcm9tICcuL2RlYnVnJzsgaWYoIGRlYnVnLmVuYWJsZWQgKSBkZWJ1Zy5pbml0KCk7XG4vLyAtLS0tLS0tLS0tICAgRW5kIERlYnVnICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbi8vIC0tLS0tLS0tLS0gICBCZWdpbiBSZWFjdCBBcHAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoICdyZWFjdCcgKTtcbmNvbnN0IFJlYWN0RE9NID0gcmVxdWlyZSggJ3JlYWN0LWRvbScgKTtcbmNvbnN0IFdvcmtmbG93ID0gcmVxdWlyZSggJy4vV29ya2Zsb3cvV29ya2Zsb3cuanMnICk7XG5cbmNvbnN0IGFwcFJvb3RJZCA9ICdyb290J1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKCBwcm9wcyApIHtcbiAgICBzdXBlciggcHJvcHMgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFdvcmtmbG93IG5hbWU9XCJFTVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGFwcFJvb3RJZCApXG4pO1xuLy8gLS0tLS0tLS0tLSAgIEVuZCBSZWFjdCBBcHAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiJdfQ==
