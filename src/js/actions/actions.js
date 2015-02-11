var Reflux = require('reflux');
var request = require('superagent');

var {serverOrigin} = require('../env')

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

Actions.fetch.listen((path) => {
  var url = serverOrigin + path;
  var jwt = localStorage.getItem('jwt');

  request.get(url)
    .set('Authorization', 'Bearer ' + jwt)
    .end((response) => {
      if(response.unauthorized) {
        Actions.setJwt();
        return;
      }

      if (response.ok) {
        Actions.fetch.completed(response);
      } else {
        Actions.fetch.failed(response);
      }
  });
});

Actions.uploadBankStatement.listen((files) => {
  var url = serverOrigin + '/bank_statements';
  var jwt = localStorage.getItem('jwt');

  attachFiles(request.post(url), files)
    .set('Authorization', 'Bearer ' + jwt)
    .end((response) => {
      if(response.unauthorized) {
        Actions.setJwt();
      }

      debugger
      if (response.ok) {
        Actions.uploadBankStatement.completed(response);
      } else {
        Actions.uploadBankStatement.failed(response);
      }
  });


});

function attachFiles(request, files) {
  for (var i = 0; i < files.length; i++) {
    request.attach('bank_statement[file]', files[i], files[i].name);
  }

  return request;
}

module.exports = Actions;
