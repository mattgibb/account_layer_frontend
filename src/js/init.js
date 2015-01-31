App = require('./components/app')
React = require('react')

React.initializeTouchEvents(true)

React.render(App({}), document.getElementById('app'))
/**

# Router.run routes, Router.HistoryLocation, (Handler) -> # html5 history API
#  ReactRouter.Router.run AccountLayer.routes, (Handler) ->
#    React.render Handler(), root
*/
