const {
  TimPengeringanPayloadSchema,
  BahanPengeringanPayloadSchema,
  HasilPengeringanPayloadSchema,
 } = require('../../../ACCvalidatorSchema');
const InvariantError = require('../../../exception/invariantErr');
 
const PengeringanValidator = {
  timPengeringan: (payload) => {
    const validationResult = TimPengeringanPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  bahan: (payload) => {
    const validationResult = BahanPengeringanPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  hasil: (query) => {
    const validationResult = HasilPengeringanPayloadSchema.validate(query);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = PengeringanValidator;