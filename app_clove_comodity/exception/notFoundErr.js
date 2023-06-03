const ClientError = require('./clientErr');
 
class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}
 
module.exports = NotFoundError;