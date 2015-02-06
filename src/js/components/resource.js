var React = require('react')
var Router = require('react-router')
var Reflux = require('reflux')

window.Actions = require('../actions/actions')

var FilterableTable = require('./filterable_table/filterable_table')

var Resource = React.createClass({
  mixins: [Router.State],//, Reflux.connect(todoListStore,"list")],

  records() {
    return this.getPathname();
  },

  render() {
    return (
      <FilterableTable records={this.records()} />
    )
  }
})

module.exports = Resource;
