var React = require('react');

var Dropzone = React.createClass({
  getInitialState: function() {
    return {
      isDragActive: false
    }
  },

  propTypes: {
    onDrop: React.PropTypes.func.isRequired,
    style: React.PropTypes.object
  },

  onDragLeave: function(e) {
    this.setState({
      isDragActive: false
    });
  },

  onDragOver: function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";

    this.setState({
      isDragActive: true
    });
  },

  onDrop: function(e) {
    e.preventDefault();

    this.setState({
      isDragActive: false
    });

    var files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    if (this.props.onDrop) {
      this.props.onDrop(files);
    }
  },

  onClick: function () {
    this.refs.fileInput.getDOMNode().click();
  },

  render: function() {
    var className = 'dropzone';

    var style = {
      width: 300,
      height: this.props.size || 100,
      borderStyle: this.state.isDragActive ? "solid" : "dashed"
    };

    return (
      <div className={className} style={this.props.style} onClick={this.onClick} onDragLeave={this.onDragLeave} onDragOver={this.onDragOver} onDrop={this.onDrop}>
        <input style={{display: 'none' }} type='file' multiple ref='fileInput' onChange={this.onDrop} />
        {this.props.children}
      </div>
    );
  }

});

module.exports = Dropzone;
