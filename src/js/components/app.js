React = require('react')
NavBar = require('./nav_bar')

function content() {
  return <div>Yeeeeaaah</div>
  // return div({}, FilterableTable({}))
}

App = React.createClass({
  render: function() {
    return <div className="bum">
      <NavBar />
      <div className="container">{content()}</div>
    </div>
  }
})

module.exports = React.createFactory(App)
