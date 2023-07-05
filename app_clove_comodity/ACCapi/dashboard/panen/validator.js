const {
  StatusQuerySchema, 
  LahanPayloadSchema,
  SetoranPayloadSchema,
  HasilPanenPayloadSchema,
  asasas,
 } = require('../../../ACCvalidatorSchema');
const InvariantError = require('../../../exception/invariantErr');
 
const PanenValidator = {
  lahan: (payload) => {
    const validationResult = LahanPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  setoran: (payload) => {
    const validationResult = SetoranPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  hasilPanen: (payload) => {
    const validationResult = HasilPanenPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },

  statusBayar: (query) => {
    const validationResult = StatusQuerySchema.validate(query);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = PanenValidator;