React = require('react')

var Row = React.createClass({
  render() {
    <tr>
      <td>{this.props.record.name}</td>
    </tr>
  }
})

module.exports = Row
