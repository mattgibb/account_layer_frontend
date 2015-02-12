var React = require('react');

var Table = require('./table')

var FilterableTable = React.createClass({
  getInitialState() {
    return {filterText: ''}
  },

  handleUserInput(filterText) {
    this.setState({filterText: filterText})
  },

  render() {
    return (
    <div>
      <Table records={this.props.records} actions={this.props.actions}/>
    </div>
//    <FilterBox filterText={this.state.filterText} onUserInput={handleUserInput} />
    )
  }
})

module.exports = FilterableTable
