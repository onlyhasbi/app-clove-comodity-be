const { 
    BuruhKontakPayloadSchema,
   } = require('../../ACCvalidatorSchema');
  const InvariantError = require('../../exception/invariantErr');
   
  const ProfilingValidator = {
    addKontakBuruh: (payload) => {
      const validationResult = BuruhKontakPayloadSchema.validate(payload); 
      if (validationResult.error) { throw new InvariantError(validationResult.error.message) }
    },
}   

module.exports = ProfilingValidator;