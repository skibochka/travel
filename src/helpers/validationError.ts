class ValidationError extends Error {
  constructor(message: any) {
    super();
    this.message = message;
    this.name = 'E_MISSING_OR_INVALID_PARAMS';
  }
}

export default ValidationError;
