import vine from "@vinejs/vine";
import { ErrorReporter } from "./ErrorReporter";

const registerSchema = vine.object({
  username: vine.string().trim().minLength(3).maxLength(15),
  email: vine.string().email(),
  password: vine.string().minLength(6).maxLength(20).confirmed(),
});

let registerValidator = vine.compile(registerSchema);
registerValidator.errorReporter = () => new ErrorReporter();

export default registerValidator;
