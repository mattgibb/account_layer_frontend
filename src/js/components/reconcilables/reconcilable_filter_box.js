var React = require('react')
var {Button} = require('react-bootstrap')

var ReconcilableFilterBox = React.createClass({

  render() {
    return <Button active={this.props.showReconciled}
                   onClick={this.props.onShowReconciledClick}>
      Show Reconciled
    </Button>
  }
});

module.exports = ReconcilableFilterBox;
