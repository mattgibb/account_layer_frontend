var React = require('react');

var Table = require('./table')

var FilterableTable = React.createClass({
  getInitialState() {
    return {filterText: ''}
  },

  render() {
    return (
    <div>
      <Table records={this.props.records}/>
    </div>
//    <FilterBox filterText={this.state.filterText} onUserInput={handleUserInput} />
    )
  },

  handleUserInput(filterText) {
    this.setState({filterText: filterText})
  }
})

module.exports = FilterableTable
