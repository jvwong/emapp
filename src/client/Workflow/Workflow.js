const React = require('react');
const FileInputStep = require('./components/FileInputStep.js');

class Workflow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Workflow: {this.props.name}</h1>
        <FileInputStep name="Data Munge" />
      </div>
    );
  }
}

Workflow.propTypes = {
};

module.exports = Workflow;
