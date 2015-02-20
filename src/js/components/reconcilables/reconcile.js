var React = require('react')
var Reflux = require('reflux')
var Router = require('react-router')
var {Alert} = require('react-bootstrap')
var api = require('../../api');
var Actions = require('../../actions/actions')

var Reconcile = React.createClass({
  mixins: [Router.State],

  getInitialState() {
    return {
      accountId: null,
      account: null
    }
  },

  getAccount(accountId) {
    if(!accountId) return;

    var self = this;

    api.get('/accounts/' + accountId)
      .end((response) => {
        if (response.ok) {
          self.setState({account: response.body})
        } else {
          self.setState({account: 'not found'})
        }
      })
  },

  showAccount() {
    var account = this.state.account;
    if(!account) return;
    if(account == 'not found') return <span>not found</span>;

    var description = account.type.split('::').reverse()[0]
    if(account.customer_name && account.customer_type) {
      description += ' of '
                  + account.customer_name
                  + ' (' + account.customer_type + ")"
    }

    return <span>{description}</span>
  },

  onChange(e) {
    var newAccountId = e.currentTarget.value;
    this.setState({accountId: newAccountId, account: null});
    this.getAccount(newAccountId);
  },

  onClick() {
    var modelId = this.props.model.id;
    var accountId = this.state.accountId;
    var basePath = this.getPathname();
    var path = basePath +
               '/' + modelId +
               '/reconciliation';
    // TODO: change to flux pattern
    if(accountId)
      api.post(path)
        .send({account_id: accountId})
        .end((response) => {
          if(response.ok) {
            Actions.fetch(basePath)
          } else {
            this.setState(response.body);
          }
        })
  },

  alert() {
    if (this.state.error) {
      return (
        <Alert bsStyle="danger" onDismiss={() => this.setState({error: undefined})} dismissAfter={3000}>
          {this.state.error}
        </Alert>
      );
    }
  },

  render() {
    if(this.props.model.is_reconciled)
      return <td>Reconciled</td>;

    return (
      <td>
        <input type="text"
               ref="accountId"
               value={this.state.accountId}
               placeholder="account id..."
               onChange={this.onChange}
               onKeydown={this.onKeydown} />
        {this.showAccount()}
        {this.alert()}
        <br/>
        <button className="btn btn-primary" onClick={this.onClick}>
          Reconcile
        </button>
      </td>
    )
  }
})

module.exports = Reconcile;
