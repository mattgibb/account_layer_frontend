var React = require('react');

var Table = React.createClass({

/**
  headings: ->
    @props.records[0]
    some: "heading", another: "column"

  buttons: (model) ->
    _.map model.actions(), (action) ->
      action model: model
*/
  render() {
    var {attributes, models} = this.props.records || {};
    if(!(attributes && models)) return <div/>;

    var rows = models && models.map((model) => {
      values = attributes.map((attribute) =>
        <td>{model[attribute]}</td>
      );
      return <tr key={model.id}>
        {values}
        <td>Some buttons!</td>
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
