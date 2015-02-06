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
    return <table className="table table-bordered table-hover table-striped table-condensed">
      <thead>
        <tr>
          <td>Yeeah</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Baby</td>
        </tr>
      </tbody>
    </table>
    // var attributes = this.props.records.attributes;
    //
    // var rows = this.props.records.models.map((model) => {
    //   values = attributes.map((attribute) =>
    //     <td>{model.attributes[attribute]}</td>
    //   )
    //
    //   return <tr key={model.get('id')}>
    //     {values}
    //     <td>{this.buttons(model)}</td>
    //   </tr>
    // })
    //
    // return (
    //   <table className="table table-bordered table-hover table-striped table-condensed">
    //     <thead>
    //       <tr>
    //       {
    //         attributes.map((attribute) => {
    //           return <th key={attribute}>{attribute}</th>
    //         })
    //       }
    //       </tr>
    //     </thead>
    //
    //     <tbody>
    //       {rows}
    //     </tbody>
    //   </table>
    // )
  }
})

module.exports = Table
