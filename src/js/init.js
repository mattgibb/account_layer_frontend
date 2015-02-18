var React = require('react')
var Router = require('react-router');
var { Route, RouteHandler, DefaultRoute } = Router;

var App = require('./components/app')
var Home = require('./components/home')
var Resource = require('./components/resource')
var BankTransactions = require('./components/reconcilables/bank_transactions')
var FirstAssociatesTransactions = require('./components/reconcilables/first_associates_transactions')

React.initializeTouchEvents(true)

var routes =
  <Route handler={App} path="/">
    <DefaultRoute name="home" handler={Home}/>
    <Route name="accounts" handler={Resource}/>
    <Route name="transactions" handler={Resource}/>
    <Route name="bank_transactions" handler={BankTransactions}/>
    <Route name="first_associates_transactions" handler={FirstAssociatesTransactions}/>
  </Route>
  // <DefaultRoute handler={Home} />
  // <Route name="about" handler={About} />
  // <NotFoundRoute handler={NotFound}/>
;

document.addEventListener("DOMContentLoaded", function(event) {
  // for history
  // Router.run(routes, Router.HistoryLocation, function(Handler, state) {
  Router.run(routes, function(Handler, state) {
    React.render(<Handler/>, document.body)
  });
})
