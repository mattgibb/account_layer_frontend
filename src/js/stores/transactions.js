var Reflux = require("reflux");

var Actions = require('../actions/transactions')

var transactions = Reflux.createStore({
  init() {
    this.listenTo(Actions.loadTransactions)
  },
  getInitialState() {
    return this.data;
  }
})

module.exports = transactions
