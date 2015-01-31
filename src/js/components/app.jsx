React = require('react')
NavBar = require('./nav_bar')

//{div, p, h1} = React.DOM
div = React.DOM.div
p   = React.DOM.p
h1  = React.DOM.h1

function content() {
  return div({})
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
