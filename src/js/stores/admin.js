var Reflux = require('reflux');

var Actions = require('../actions/actions')

var Admin = Reflux.createStore({
  parseJwt(jwt) {
    // see http://jwt.io/ for details
    if(jwt)
      return JSON.parse(atob(jwt.split('.')[1]));
  },

  init() {
    this.listenTo(Actions.setJwt, this.onSetJwt)
  },

  onSetJwt(jwt) {
    var payload = this.parseJwt(jwt);

    this.trigger({
      admin: payload,
      loggedIn: !!jwt
    })
  }
})

module.exports = Admin
