import { homeSmile, file02, searchMd, plusSquare } from "../assets";

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
export const FormSignIn_input = [
  {
    id: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Password",
  },
];
export const FormSignUp_input = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Username",
    label: "Username",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "CIN",
    type: "text",
    placeholder: "CIN",
    label: "CIN",
    pattern: "[0-9]{8}",
    required: true,
  },
  {
    id: 3,
    name: "email",
    type: "email",
    placeholder: "Email",
    label: "Email",
    required: true,
  },
  {
    id: 4,
    name: "phone",
    type: "tel",
    placeholder: "Phone",
    label: "Phone",
    pattern: "^[0-9]{9}$",
    required: true,
  },
  {
    id: 5,
    name: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
    pattern: "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
    required: true,
  },
  {
    id: 6,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm password",
    label: "Confirm password",
    required: true,
  },
];
