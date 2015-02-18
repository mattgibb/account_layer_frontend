var React = require('react')

var Resource = require('../resource')

var BankTransactions = React.createClass({
  render() {
    return <Resource reconcilable/>
  }
})

module.exports = BankTransactions;
