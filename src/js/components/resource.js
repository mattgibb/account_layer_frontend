var React = require('react')
var Router = require('react-router')
var Reflux = require('reflux')

var Actions = require('../actions/actions')
var resources = require('../stores/resources')
var FilterableTable = require('./filterable_table/filterable_table')
var Reconcile = require('./reconcilables/reconcile')

var Resource = React.createClass({
  mixins: [Router.State, Reflux.ListenerMixin],

  propTypes: {
    reconcilable: React.PropTypes.bool
  },

  childContextTypes: {
    actions: React.PropTypes.func,
    reconcilable: React.PropTypes.bool
  },

  getChildContext() {
    return {
      actions: (this.props.reconcilable && Reconcile),
      reconcilable: this.props.reconcilable
    }
  },

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
      <FilterableTable records={this.state.records}/>
    )
  }
})

module.exports = Resource;
