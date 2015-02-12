var React = require('react')
var request = require('superagent')
var api = require('../../api');

window.request = request;

var BankTransactionActions = React.createClass({
  getInitialState() {
    return {
      accountId: null,
      account: null
    }
  },

  getAccount(accountId) {
    if(accountId == "") return;

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

    var type = account.type.split('::').reverse()[0]
    return <span>{type} ({account.credit_or_debit}): ${account.balance}</span>
  },

  onChange(e) {
    var newAccountId = e.currentTarget.value;
    this.setState({accountId: newAccountId, account: null});
    this.getAccount(newAccountId);
  },

  onClick() {
    alert('hello');
  },

  render() {
    return (
      <td>
        <input type="text"
               ref="accountId"
               value={this.state.accountId}
               placeholder="account id..."
               onChange={this.onChange}
               onKeydown={this.onKeydown} />
        {this.showAccount()}
        <br/>
        <button className="btn btn-primary" onClick={this.onClick}>
          Reconcile
        </button>
      </td>
    )
  }
})

module.exports = BankTransactionActions;
