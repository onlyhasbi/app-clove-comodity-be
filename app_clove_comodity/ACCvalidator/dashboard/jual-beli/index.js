const { 
  PxP_UserPayloadSchema,
  B_UserPayloadSchema,
 } = require('./schema');
const InvariantError = require('../../exception/invariantErr');
 
const UsersValidator = {
  buruh: (payload) => {
    const validationResult = B_UserPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  pxp: (payload) => {
    const validationResult = PxP_UserPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = UsersValidator;