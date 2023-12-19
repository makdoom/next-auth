import vine from "@vinejs/vine";

const registerSchema = vine.object({
  username: vine.string().trim().minLength(3).maxLength(15),
  email: vine.string().email(),
  password: vine.string().minLength(6).maxLength(20).confirmed(),
});

export const registerValidator = vine.compile(registerSchema);
