var React = require('react')
var Reflux = require("reflux");

var Home = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className="jumbotron">
        <h1>Name: {this.state.name}</h1>
      </div>
    )
  }
});

module.exports = Home
