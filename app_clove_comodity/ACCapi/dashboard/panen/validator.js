const { 
  PayloadLahanSchema,
  QueryLahanSchema,
 } = require('../../../ACCvalidatorSchema');
const InvariantError = require('../../../exception/invariantErr');
 
const PanenValidator = {
  payloadLahan: (payload) => {
    const validationResult = PayloadLahanSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  queryLahan: (query) => {
    const validationResult = QueryLahanSchema.validate(query);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = PanenValidator;