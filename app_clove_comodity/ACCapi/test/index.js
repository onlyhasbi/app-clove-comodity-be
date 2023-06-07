const testHandler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'test',
  version: '1.0.0',
  register: async (server) => {
    const Handler = new testHandler();
    server.route(routes(Handler));
  },
};