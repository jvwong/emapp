const React = require('react');

class Step extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{ this.props.name }</h1>
        { this.props.children }
      </div>
    );
  }
}

Step.propTypes = {
  name: React.PropTypes.string
};

module.exports = Step;
