var React = require('react')

var Actions = require('../actions/actions')

var LoginForm = React.createClass({
  openOAuthPopup() {
    window.open();
  },

  render() {
    return (
      <a className="btn btn-primary" onClick={openOAuthPopup}>Login with Google Apps</a>
    )
  }
})

// robbed from Meteor oauth package
// https://github.com/meteor/meteor/blob/devel/packages/oauth/oauth_browser.js
function openOAuthPopup() {
  var width = 650, height = 331;
  var url = 'http://localhost:3000/auth/google_apps_oauth2';
  var screenX = typeof window.screenX !== 'undefined'
        ? window.screenX : window.screenLeft;
  var screenY = typeof window.screenY !== 'undefined'
        ? window.screenY : window.screenTop;
  var outerWidth = typeof window.outerWidth !== 'undefined'
        ? window.outerWidth : document.body.clientWidth;
  var outerHeight = typeof window.outerHeight !== 'undefined'
        ? window.outerHeight : (document.body.clientHeight - 22);
  // XXX what is the 22?

  // Use `outerWidth - width` and `outerHeight - height` for help in
  // positioning the popup centered relative to the current window
  var left = screenX + (outerWidth - width) / 2;
  var top = screenY + (outerHeight - height) / 2;
  var features = ('width=' + width + ',height=' + height +
                  ',left=' + left + ',top=' + top + ',scrollbars=yes');

  var newwindow = window.open(url, 'Login', features);
  if (newwindow.focus)
    newwindow.focus();
  return newwindow;
};

window.addEventListener("message",
  (event) => Actions.setJwt(event.data),
  false
);

module.exports = LoginForm
