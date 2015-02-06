var Reconcile = React.createClass({
  handleSubmit(event) {
    event.preventDefault()
    debugger
  },

  render() {
    if(this.props.model.is_reconciled) {
      <button className="btn btn-info disabled">Reconciled</button>
    } else {
      <form
        action="/bank_transactions/{this.props.model.id}/reconciliation"
        method="post"
        onSubmit={this.handleSubmit}>
        <label htmlFor="account-id"/>
        <input type="text" name="account-id" placeholder="account id"/>
        <input type="submit" className="btn btn-info">Reconcile</input>
      </form>
    }
})

module.exports = Reconcile
