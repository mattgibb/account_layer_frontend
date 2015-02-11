var Reflux = require('reflux');
var request = require('superagent');

var Actions = Reflux.createActions({
  fetch: {asyncResult: true},
  setJwt: {}
});
    // "toggleItem",     // called by button in TodoItem
    // "toggleAllItems", // called by button in TodoMain (even though you'd think TodoHeader)
    // "addItem",        // called by hitting enter in field in TodoHeader
    // "removeItem",     // called by button in TodoItem
    // "clearCompleted", // called by button in TodoFooter
    // "editItem"        // called by finishing edit in TodoItem

Actions.fetch.listen((path) => {
  // TODO: retrieve api root from ENV
  var url = 'http://localhost:3000' + path;
  var jwt = localStorage.getItem('jwt');

  request.get(url)
    .set('Authorization', 'Bearer ' + jwt)
    .end((response) => {
      if(response.unauthorized) {
        Actions.setJwt();
      }

      if (response.ok) {
        Actions.fetch.completed(response);
      } else {
        Actions.fetch.failed(response);
      }
  });
});

module.exports = Actions;
