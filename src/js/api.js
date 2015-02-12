var request = require('superagent');

var Actions = require('./actions/actions')
var {serverOrigin} = require('./env');

function auth(request) {
  var jwt = localStorage.getItem('jwt');
  request.set('Authorization', 'Bearer ' + jwt);
}

function origin(request) {
  if (request.url[0] === '/')
    request.url = serverOrigin + request.url;
}

function logOutUnauthorized() {
  if(this.xhr.status == 401)
    Actions.setJwt();
}

function apiDecorator(method) {
  return function(path) {
    return request[method](path)
      .use(auth)
      .use(origin)
      .on('end', logOutUnauthorized);
  }
}

module.exports = {
  get:  apiDecorator('get'),
  post: apiDecorator('post'),
  put:  apiDecorator('put'),
  del:  apiDecorator('del')
}
