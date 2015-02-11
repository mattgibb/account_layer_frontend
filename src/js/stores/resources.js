var Reflux = require("reflux");

var {fetch} = require('../actions/actions')

function createResource(name) {
  var _data;

  function matchesResource(response) {
    // use anchor to extract path from url
    var parser = document.createElement('a');
    parser.href = response.req.url;

    return parser.pathname == ('/' + name);
  }

  function onResponse(response) {
    if(matchesResource(response)) {
      _data = response.body;
      this.trigger(_data);
    }
  }

  return Reflux.createStore({
    init() {
      this.listenTo(fetch.completed, onResponse)
    },

    getInitialState() {
      return _data;
    }
  })
}

var resources = {};
['accounts', 'transactions', 'bank_transactions'].forEach((resource) => {
  resources['/'+resource] = createResource(resource);
})

module.exports = resources;
