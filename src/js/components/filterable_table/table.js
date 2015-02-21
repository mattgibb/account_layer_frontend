var React = require('react/addons');
var TransitionGroup = React.addons.CSSTransitionGroup;


var Table = React.createClass({
  contextTypes: {
    actions: React.PropTypes.func
  },

  render() {
    var {attributes, models} = this.props.records || {};
    if(!(attributes && models)) return <div/>;

    var rows = models && models.map((model) => {
      values = attributes.map((attribute, i) =>
        <td key={i}>{model[attribute]}</td>
      );
      var Actions = this.context.actions;
      if(Actions) values.push(<Actions model={model} key={values.length}/>);
      return <tr key={model.id}>
        {values}
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
        <TransitionGroup transitionName="table" component="tbody">
          {rows}
        </TransitionGroup>
      </table>
    )
  }
})

module.exports = Table
