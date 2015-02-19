var React = require('react')
var Reflux = require('reflux')
var Dropzone = require('./dropzone')

var FileUploadButton = React.createClass({
  // listenToMany includes child actions too
  // mixins: [Reflux.listenToMany({
  //  upload: uploadBankStatement
  //})],
  mixins: [Reflux.ListenerMixin],

  componentDidMount() {
    this.listenToMany({upload: this.props.action})
  },

  onUpload()         { this.setState({status: {info: "Uploading file..."}}) },
  onUploadFailed()   { this.setState({status: {danger: "There was a problem with the file."}}) },
  onUploadCompleted(response) {
    if(response.status == 201)
      this.setState({status: {success: "File successfully uploaded."}});
    if(response.status == 200)
      this.setState({status: {success: "File had already been uploaded."}});
  },

  propTypes: {
    action: React.PropTypes.func.isRequired,
    style: React.PropTypes.object
  },

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
    this.props.action(files)
  },

  render() {
    return <div className="file-upload-button" style={this.props.style}>
      {this.alert()}
      <Dropzone onDrop={this.onDrop}>
        {alert}
        <button type="button" className="btn btn-default btn-lg">
          <span className="glyphicon glyphicon-cloud-upload" aria-hidden="true"></span> {this.props.children}
        </button>
      </Dropzone>
    </div>
  }
});

module.exports = FileUploadButton
