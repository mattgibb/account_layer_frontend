var React = require('react')

var FilterBox = React.createClass({
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.getDOMNode().value)
  },
  render() {
    return (
      <form>
       <input
         type="text"
         value={this.props.filterText}
         ref="filterTextInput"
         onChange={this.handleChange}
         placeholder="Search..." />
       <p>
         <input type="checkbox" />
         <span>Only show products in stock</span>
       </p>
     </form>
    )
  }
})

module.exports = FilterBox
