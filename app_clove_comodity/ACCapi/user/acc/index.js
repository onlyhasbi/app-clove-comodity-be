const Handler = require('./handler');
const routes = require('./routes');
 
module.exports = {
  name: 'userPetani',
  version: '1.0.0',
  register: async (server, {service, validator, authentic}) => {
    const pluginHandler = new Handler(service, validator, authentic);
    server.route(routes(pluginHandler));
  },
};