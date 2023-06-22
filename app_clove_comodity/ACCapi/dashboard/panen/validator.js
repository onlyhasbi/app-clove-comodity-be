const { 
  LahanPayloadSchema,
  SetoranPayloadSchema,
  HasilPanenPayloadSchema,
 } = require('../../../ACCvalidatorSchema');
const InvariantError = require('../../../exception/invariantErr');
 
const PanenValidator = {
  lahan: (payload) => {
    const validationResult = LahanPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  setoran: (query) => {
    const validationResult = SetoranPayloadSchema.validate(query);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  hasilPanen: (query) => {
    const validationResult = HasilPanenPayloadSchema.validate(query);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = PanenValidator;