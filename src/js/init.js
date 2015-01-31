App = require('./components/app')
React = require('react')

React.initializeTouchEvents(true)

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler/>, document.body)
})
