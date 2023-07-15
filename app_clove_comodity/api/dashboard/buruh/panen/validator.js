const {komplainPayloadSchema} = require('../../../../validatorSchema');
const InvariantError = require('../../../../exception/invariantErr');
 
const KomplainValidator = {
  komplain: (payload) => {
    const validationResult = komplainPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = KomplainValidator;