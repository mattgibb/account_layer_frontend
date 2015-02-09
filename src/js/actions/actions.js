var Reflux = require('reflux');

var Actions = Reflux.createActions({
    fetchTransactions: {asyncResult: true},
    setJwt: {},
});
    // "toggleItem",     // called by button in TodoItem
    // "toggleAllItems", // called by button in TodoMain (even though you'd think TodoHeader)
    // "addItem",        // called by hitting enter in field in TodoHeader
    // "removeItem",     // called by button in TodoItem
    // "clearCompleted", // called by button in TodoFooter
    // "editItem"        // called by finishing edit in TodoItem

Actions.fetchTransactions.listen(function() {
  // someAsyncOperation()
  //   .then(this.completed)
  //   .catch(this.failed)
})

module.exports = Actions;
