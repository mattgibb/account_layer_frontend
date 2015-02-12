var React = require('react')
var Router = require('react-router')
var Reflux = require('reflux')

var Actions = require('../actions/actions')
var resources = require('../stores/resources')
var FilterableTable = require('./filterable_table/filterable_table')

var Resource = React.createClass({
  mixins: [Router.State, Reflux.ListenerMixin],

  onFetch(records) {
    this.setState({
      records: records
    });
  },

  fetchAndListenToStore() {
    var path = this.getPathname();
    var store = resources[path];
    if(store) this.listenTo(store, this.onFetch);
    Actions.fetch(path);
  },

  componentDidMount() {
    this.fetchAndListenToStore()
  },

  componentWillReceiveProps() {
    this.stopListeningToAll();
    this.fetchAndListenToStore()
  },

  getInitialState() {
    return {};
  },

  render() {
    return (
      <FilterableTable records={this.state.records} actions={this.props.actions}/>
    )
  }
})

module.exports = Resource;
