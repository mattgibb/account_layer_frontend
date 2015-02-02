var React = require('react')
var Reflux = require("reflux");
var transactions = require('../stores/transactions')

var Home = React.createClass({
  mixins: [Reflux.connect(transactions)],

  render() {
    return (
      <div className="jumbotron">
        <h1>Name: {this.state.name}</h1>
        <h1>Name: {this.state.name}</h1>
        <h1>Name: {this.state.name}</h1>
        <h1>Name: {this.state.name}</h1>
        <h1>Name: {this.state.name}</h1>
        <h1>Name: {this.state.name}</h1>
      </div>
    )
  }
});

module.exports = Home
