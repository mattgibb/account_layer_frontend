var React = require('react')
var Reflux = require('reflux')

var {uploadBankStatement} = require('../../actions/actions')
var Resource = require('../resource')
var Dropzone = require('../dropzone')
var BankTransactionActions = require('./bank_transaction_actions')

var BankTransactions = React.createClass({
  // listenToMany includes child actions too
  mixins: [Reflux.listenToMany({
    upload: uploadBankStatement
  })],

  onUpload()         { this.setState({status: {info: "Uploading statement..."}}) },
  onUploadComplete() { this.setState({status: {success: "Statement successfully uploaded."}}) },
  onUploadFailed()   { this.setState({status: {danger: "There was a problem uploading the statement."}}) },

  getInitialState() {
    return {};
  },

    alert() {
    var status = this.state.status;
    if(status) {
      var type = Object.keys(status)[0];
      var message = status[type];
      className = "alert alert-" + type;

      return <div className={className}>
        <button type="button" className="close" onClick={() => this.setState({status: null})}>&times;</button>
        {message}
      </div>
    }
  },

  onDrop(files) {
    uploadBankStatement(files)
  },

  render() {
    return (
      <div>
        <Resource actions={BankTransactionActions}/>
        {this.alert()}
        <Dropzone onDrop={this.onDrop}>
          {alert}
          <button type="button" className="btn btn-default btn-lg">
            <span className="glyphicon glyphicon-cloud-upload" aria-hidden="true"></span> Click or drag a Wells Fargo<br/>QFX statement on me
          </button>
        </Dropzone>
      </div>
    )
  }
})

module.exports = BankTransactions;
