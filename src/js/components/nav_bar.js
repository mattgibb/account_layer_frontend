var React = require('react')
var {Link} = require('react-router')

var NavBar = React.createClass({
  links() {
    return (
      <ul className="nav navbar-nav">
        <li><Link to="home">Home</Link></li>
        <li><Link to="/accounts">Accounts</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/bank-transactions">Bank Transactions</Link></li>
      </ul>
    )
  },
  render() {
    return (
      <nav className="navbar navbar-fixed-top navbar-inverse">
       <div className="container">
         <div className="navbar-header">
           <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
           </button>
           <a className="navbar-brand" href="#">Account Layer</a>
         </div>
         <div id="navbar" className="collapse navbar-collapse">
           {this.links()}
           <ul className="nav navbar-nav navbar-right">
             <li><p className="admin-name">{this.props.adminName}</p></li>
             <li><a href="/signout">Sign Out</a></li>
           </ul>
         </div>
       </div>
     </nav>
    )
  }
})

module.exports = NavBar
