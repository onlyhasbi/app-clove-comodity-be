const ClientError = require('./clientErr');
 
class BadResourceError extends ClientError {
  constructor(message) {
    super(message, 403);
    this.name = 'BadResourceError';
  }
}
 
module.exports = BadResourceError;