var React = require('react')
var Reflux = require('reflux');
var RouteHandler = require('react-router').RouteHandler;

var Admin = require('../stores/admin')
var NavBar = require('./nav_bar')
var LoginForm = require('./login_form')

var App = React.createClass({
  mixins: [Reflux.connect(Admin)],

  render() {
    if(this.state.loggedIn) {
      return <div>
        <NavBar/>
        <div className="container">
          <RouteHandler/>
        </div>
      </div>
    } else {
      return <div>
        <LoginForm/>
      </div>
    }
  }
})

module.exports = App
