const { 
  AccUserPayloadSchema,
  BuruhUserPayloadSchema,
  UpdateAccUserPayloadSchema,
  UpdateBuruhUserPayloadSchema,
  // UpdatePasswordAccUserPayloadSchema,
  // UpdatePasswordBuruhUserPayloadSchema,
  DeleteBuruhUserPayloadSchema,
  DeleteAccUserPayloadSchema,
 } = require('../../ACCvalidatorSchema');
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
  // updatePasswordBuruh: (payload) => {
  //   const validationResult = UpdatePasswordBuruhUserPayloadSchema.validate(payload);
  //   if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  // },
  // UpdatePasswordAcc: (payload) => {
  //   const validationResult = UpdatePasswordAccUserPayloadSchema.validate(payload);
  //   if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  // },
  deleteBuruh: (payload) => {
    const validationResult = DeleteBuruhUserPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  deleteAcc: (payload) => {
    const validationResult = DeleteAccUserPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = UsersValidator;