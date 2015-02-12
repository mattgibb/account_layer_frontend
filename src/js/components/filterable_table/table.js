var React = require('react');

var Table = React.createClass({
  renderActions(model) {
    var Actions = this.props.actions
    if(Actions)
      return <Actions model={model} />;
  },

  render() {
    var {attributes, models} = this.props.records || {};
    if(!(attributes && models)) return <div/>;

    var rows = models && models.map((model) => {
      values = attributes.map((attribute) =>
        <td>{model[attribute]}</td>
      );
      return <tr key={model.id}>
        {values}
        {this.renderActions(model)}
      </tr>
    });

    return (
      <table className="table table-bordered table-hover table-striped table-condensed">
        <thead>
          <tr>
          {
            attributes && attributes.map((attribute) => {
              return <th key={attribute}>{attribute}</th>
            })
          }
          </tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
})

module.exports = Table
