const { 
  PembelianPayloadSchema,
  PenjualanPayloadSchema,
 } = require('../../../../validatorSchema');
const InvariantError = require('../../../../exception/invariantErr');
 
const JualBeliValidator = {
  pembelian: (payload) => {
    const validationResult = PembelianPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  penjualan: (query) => {
    const validationResult = PenjualanPayloadSchema.validate(query);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = JualBeliValidator;