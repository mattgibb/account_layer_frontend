var React = require('react');

var Table = require('./table')

var FilterableTable = React.createClass({
  getInitialState() {
    return {
      filterText: '',
      showReconciled: false
    }
  },

  contextTypes: {
    filterBox: React.PropTypes.func
  },

  handleUserInput(filterText) {
    this.setState({filterText: filterText})
  },

  handleShowReconciledClick() {
    this.setState({
      showReconciled: !this.state.showReconciled
    })
  },

  filterBox() {
    var FilterBox = this.context.filterBox
    if(FilterBox)
      return <FilterBox
        showReconciled={this.state.showReconciled}
        onShowReconciledClick={this.handleShowReconciledClick}
      />
  },

  getRecords() {
    var {attributes, models} = this.props.records || {};
    return {
      attributes: attributes,
      models: (models || []).filter((el) =>
        this.state.showReconciled || !el.is_reconciled
      )
    }
  },

  render() {
    return (
    <div>
      {this.filterBox()}
      <Table records={this.getRecords()}/>
    </div>
//    <FilterBox filterText={this.state.filterText} onUserInput={handleUserInput} />
    )
  }
})

module.exports = FilterableTable
