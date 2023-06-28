const {
  CredentialParameterPayloadSchema,
  PutAuthPayloadSchema,
  DeleteAuthPayloadSchema,
} = require('../../ACCvalidatorSchema');
const InvariantError = require('../../exception/invariantErr');
 
const AuthsValidator = {
  PostAuthPayload: (payload) => {
    const validationResult = CredentialParameterPayloadSchema.validate(payload);
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