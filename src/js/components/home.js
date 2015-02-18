var React = require('react')
var Reflux = require("reflux");

var FileUploadButton = require('./file_upload_button')
var {uploadBankStatement, uploadFirstAssociatesReport} = require('../actions/actions')

var Home = React.createClass({
  getInitialState() {
    return {};
  },

  render() {
    return (
      <div className="jumbotron jumbotron-group">
        <FileUploadButton
          action={uploadBankStatement}
          style={{float: 'left'}}>
          Click or drag a Wells Fargo<br/>QFX statement on me
        </FileUploadButton>
        <FileUploadButton
          action={uploadFirstAssociatesReport}
          style={{float: 'right'}}>
          Click or drag a First Associates<br/>loan report on me
        </FileUploadButton>
      </div>
    )
  }
});

module.exports = Home
