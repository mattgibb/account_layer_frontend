var Reflux = require('reflux');

module.exports = Reflux.createActions({
    fetchTransactions: {
      asyncResult: true
    }
});
  "fetchTransactions",
  "reconcileTransaction"
    // "toggleItem",     // called by button in TodoItem
    // "toggleAllItems", // called by button in TodoMain (even though you'd think TodoHeader)
    // "addItem",        // called by hitting enter in field in TodoHeader
    // "removeItem",     // called by button in TodoItem
    // "clearCompleted", // called by button in TodoFooter
    // "editItem"        // called by finishing edit in TodoItem

module.exports.fetchTransactions.listen(function() {
  someAsyncOperation()
    .then(this.completed)
    .catch(this.failed)
})
