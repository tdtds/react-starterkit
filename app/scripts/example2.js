/** @jsx React.DOM */
var React = require('react')

Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

React.render(<Hello name="JSX" />, document.getElementById("example2"));
