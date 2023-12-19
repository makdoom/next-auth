import vine from "@vinejs/vine";
import { SchemaTypes } from "@vinejs/vine/types";
import { ErrorReporter } from "./ErrorReporter";

const createValidator = (schema: SchemaTypes) => {
  let validator = vine.compile(schema);
  validator.errorReporter = () => new ErrorReporter();

  return validator;
};

export default createValidator;
