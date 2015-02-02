React = require('react')
var RouteHandler = require('react-router').RouteHandler;
var NavBar = require('./nav_bar')

var App = React.createClass({
  render: function() {
    return <div>
      <NavBar />
      <div className="container">
        <RouteHandler/>
      </div>
    </div>
  }
})

module.exports = React.createFactory(App)
