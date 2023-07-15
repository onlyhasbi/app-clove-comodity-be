const {
  PostAuthPayloadSchema,
  PutAuthPayloadSchema,
  DeleteAuthPayloadSchema,
} = require('../../../../validatorSchema');
const InvariantError = require('../../../../exception/invariantErr');
 
const AuthsValidator = {
  PostAuthPayload: (payload) => {
    const validationResult = PostAuthPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  PutAuthPayload: (payload) => {
    const validationResult = PutAuthPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  DeleteAuthPayload: (payload) => {
    const validationResult = DeleteAuthPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = AuthsValidator;