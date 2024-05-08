import { useState } from "react";
import { FormSignUp_input } from "../constants";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="block text-gray-700 text-sm font-bold mb-2 z-50  ">
      <label className="block text-n-2 text-sm font-bold mb-2">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

const FormSignUp = () => {
  const [form, setForm] = useState({
    username: "",
    CIN: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <form className="w-full max-w-xs h-auto">
      {FormSignUp_input.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          value={form[input.id]}
          onChange={handleChange}
        />
      ))}
    </form>
  );
};

export default FormSignUp;
