import vine from "@vinejs/vine";
import { ErrorReporter } from "./ErrorReporter";

const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(6).maxLength(20),
});

let loginValidator = vine.compile(loginSchema);
loginValidator.errorReporter = () => new ErrorReporter();

export default loginValidator;
