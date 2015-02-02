var React = require('react')
var RouteHandler = require('react-router').RouteHandler;
var NavBar = require('./nav_bar')

function content() {
  return <div>Yeeeeaaah</div>
  // return div({}, FilterableTable({}))
}

var App = React.createClass({
  render: function() {
    return <div className="bum">
      <NavBar />
      <div className="container">{content()}</div>
      <RouteHandler/>
    </div>
  }
})

module.exports = React.createFactory(App)
