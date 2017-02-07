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

import 'babel-polyfill';

// ----------   Begin Debug   ------------------------------------------------//
import debug from './debug'; if( debug.enabled ) debug.init();
// ----------   End Debug   --------------------------------------------------//


// ----------   Begin React App   --------------------------------------------//
const React = require( 'react' );
const ReactDOM = require( 'react-dom' );
const Workflow = require( './Workflow/Workflow.js' );

const appRootId = 'root'

class App extends React.Component {

  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div>
        <Workflow name="EM" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById( appRootId )
);
// ----------   End React App   ----------------------------------------------//
