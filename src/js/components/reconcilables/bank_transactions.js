var React = require('react')

var Resource = require('../resource')
var ReconcilableFilterBox = require('./reconcilable_filter_box')

var BankTransactions = React.createClass({
  childContextTypes: {
    filterBox: React.PropTypes.func
  },

  getChildContext() {
    return {
      filterBox: ReconcilableFilterBox
    }
  },

  render() {
    return <Resource reconcilable/>
  }
})

module.exports = BankTransactions;
