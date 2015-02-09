var Reflux = require('reflux');

var Actions = Reflux.createActions({
    "loadTransactions": {children: ["completed","failed"]}
});

// when 'load' is triggered, call async operation and trigger related actions
// Actions.load.listen( function() {
    // By default, the listener is bound to the action
    // so we can access child actions using 'this'
    // someAsyncOperation()
    //     .then( this.completed )
    //     .catch( this.failed );
// });

// or...
// Actions.load.listenAndPromise(someAsyncOperation)
