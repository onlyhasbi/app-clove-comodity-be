const {
  InfoLamaranPayloadSchema,
  InfoRelasiQuerySchema,
  InfoPenawaranPayloadSchema,
} = require('../../../../validatorSchema');
const InvariantError = require('../../../../exception/invariantErr');
 
const AccInfoValidator = {
  lamaran: (payload) => {
    const validationResult = InfoLamaranPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  relasi: (query) => {
    const validationResult = InfoRelasiQuerySchema.validate(query);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
  penawaran: (payload) => {
    const validationResult = InfoPenawaranPayloadSchema.validate(payload);
    if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
  },
};
 
module.exports = AccInfoValidator;