const React = require('react');
const Step = require('./Step.js');

class FileInputStep extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Step name="Metadata Input">
        <p>Some extra bloat</p>
      </Step>
    );
  }
}

module.exports = FileInputStep;
