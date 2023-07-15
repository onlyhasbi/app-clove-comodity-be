const { 
  AccUserPayloadSchema,
  BuruhUserPayloadSchema,
  UpdateAccUserPayloadSchema,
  UpdateBuruhUserPayloadSchema,
  UpdatePasswordUserPayloadSchema,
  CredentialParameterPayloadSchema,
 } = require('../../validatorSchema');
const InvariantError = require('../../exception/invariantErr');
 
const UsersValidator = {
  addBuruh: (payload) => {
    const validationResult = BuruhUserPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  addAcc: (payload) => {
    const validationResult = AccUserPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  updateBuruh: (payload) => {
    const validationResult = UpdateBuruhUserPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  updateAcc: (payload) => {
    const validationResult = UpdateAccUserPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  updateSandiUser: (payload) => {
    const validationResult = UpdatePasswordUserPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  deleteUser: (payload) => {
    const validationResult = CredentialParameterPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = UsersValidator;