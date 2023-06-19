const { 
  kontakPayloadSchema,
  lamaranPayloadSchema,
  jobReqruimentPayloadSchema,
  offerPayloadSchema,
 } = require('../../ACCvalidatorSchema');
const InvariantError = require('../../exception/invariantErr');
 
const UsersValidator = {
  kontak: (payload) => {
    const validationResult = kontakPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  lamaran: (payload) => {
    const validationResult = lamaranPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  jobReqruiment: (payload) => {
    const validationResult = jobReqruimentPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  offer: (payload) => {
    const validationResult = offerPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = UsersValidator;