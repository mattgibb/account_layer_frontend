var Reflux = require('reflux');

var Actions = require('../actions/actions')

function parseJwt(jwt) {
  // see http://jwt.io/ for details
  if(jwt)
    try {
      return JSON.parse(atob(jwt.split('.')[1]));
    } catch(e) {
      Actions.setJwt();
    }
}

function payload(jwt) {
  return {
    jwt: jwt,
    admin: parseJwt(jwt),
    loggedIn: !!jwt
  }
}

function onSetJwt(jwt) {
  localStorage.setItem('jwt', jwt);
  this.trigger(payload(jwt));
}

var Admin = Reflux.createStore({
  init() {
    this.listenTo(Actions.setJwt, onSetJwt);
  },

  getInitialState() {
    var jwt = localStorage.getItem('jwt');
    return payload(jwt);
  }
})

module.exports = Admin
