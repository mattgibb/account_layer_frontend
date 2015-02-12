var Reflux = require('reflux');
var request = require('superagent');

var Actions = Reflux.createActions({
  fetch: {asyncResult: true},
  uploadBankStatement: {asyncResult: true},
  setJwt: {}
});

    // "toggleItem",     // called by button in TodoItem
    // "toggleAllItems", // called by button in TodoMain (even though you'd think TodoHeader)
    // "addItem",        // called by hitting enter in field in TodoHeader
    // "removeItem",     // called by button in TodoItem
    // "clearCompleted", // called by button in TodoFooter
    // "editItem"        // called by finishing edit in TodoItem

module.exports = Actions

// api requires setJwt action, so has to go below it
var api = require('../api')

Actions.fetch.listen((path) => {
  api.get(path)
    .end((response) => {
      if (response.ok) {
        Actions.fetch.completed(response);
      } else {
        Actions.fetch.failed(response);
      }
  });
});

Actions.uploadBankStatement.listen((files) => {
  api.post('/bank_statements')
    .use(attachFiles(files))
    .end((response) => {
      if (response.ok) {
        Actions.uploadBankStatement.completed(response);
      } else {
        Actions.uploadBankStatement.failed(response);
      }
  });
});

function attachFiles(files) {
  return function(request) {
    for (var i = 0; i < files.length; i++) {
      request.attach('bank_statement[file]', files[i], files[i].name);
    }
  }
}
