var App = require('./components/app')
var React = require('react')
var Router = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = Router;
var Home = require('./components/home')

React.initializeTouchEvents(true)

var routes =
  <Route handler={App} path="/">
    <DefaultRoute name="home" handler={Home}/>
  </Route>
  // <DefaultRoute handler={Home} />
  // <Route name="about" handler={About} />
  // <NotFoundRoute handler={NotFound}/>
;

document.addEventListener("DOMContentLoaded", function(event) {
  Router.run(routes, Router.HistoryLocation, function(Handler, state) {
    React.render(<Handler/>, document.body)
  });
})
