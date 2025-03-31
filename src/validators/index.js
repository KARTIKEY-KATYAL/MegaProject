import { body } from "express-validator";

const userregisterationvalidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is inValid"),
    body("username")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Minimum length should be 3")
      .isLength({ max: 8 })
      .withMessage({ max: "Maximum length shold be 8" }),
  ];
};

const userloginvalidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Email is inValid"),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Minimum Length of password should be 8"),
  ];
};

export { userregisterationvalidator, userloginvalidator };
