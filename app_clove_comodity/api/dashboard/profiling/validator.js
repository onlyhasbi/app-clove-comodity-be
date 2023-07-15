const { 
  kontakPayloadSchema,
  lamaranPayloadSchema,
  jobReqruimentPayloadSchema,
  offerPayloadSchema,
  StatusQuerySchema,
  CoverHeadersSchema
 } = require('../../../validatorSchema');
const InvariantError = require('../../../exception/invariantErr');
 
const profilingValidator = {
  kontak: (payload) => {
    const validationResult = kontakPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  lamaran: (payload) => {
    const validationResult = lamaranPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  lowongan: (payload) => {
    const validationResult = jobReqruimentPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  penawaran: (payload) => {
    const validationResult = offerPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  status: (payload) => {
    const validationResult = StatusQuerySchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  validateCoverHeaders: (headers) => {
    const validationResult = CoverHeadersSchema.validate(headers); 
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = profilingValidator;