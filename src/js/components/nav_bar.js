var React = require('react')
var Reflux = require('reflux')
var {Link} = require('react-router')
var {Navbar, Nav, NavItem, DropdownButton, MenuItem} = require('react-bootstrap')
var {NavItemLink, MenuItemLink} = require('react-router-bootstrap')

var Actions = require('../actions/actions')
var Admin = require('../stores/admin')
window.ReactBootstrap = require('react-bootstrap')

var NavBar = React.createClass({
  mixins: [Reflux.connect(Admin)],

  signOut() {
    Actions.setJwt();
  },

  render() {
    return (
      <Navbar fixedTop inverse>
        <Nav>
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Account Layer</a>
          </div>
          <NavItemLink to="/accounts" eventKey={1}>Accounts</NavItemLink>
          <NavItemLink to="/transactions" eventKey={2}>Transactions</NavItemLink>
          <DropdownButton eventKey={3} title="Imports">
            <MenuItemLink to="/bank_transactions" eventKey="1">Bank Transactions</MenuItemLink>
            <MenuItem divider />
            <MenuItemLink to="/first_associates_transactions" eventKey="2">First Associates Transactions</MenuItemLink>
          </DropdownButton>
        </Nav>
        <Nav right>
          <NavItem className={"admin-name"}>{(this.state.admin || {}).name}</NavItem>
          <NavItem onSelect={this.signOut}>Sign Out</NavItem>
        </Nav>
      </Navbar>
    )
  }
})

module.exports = NavBar
