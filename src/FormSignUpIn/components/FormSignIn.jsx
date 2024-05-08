import { useState } from "react";
import { FormSignIn_input } from "../constants";

const FormInputSignIn = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="block text-gray-700 text-sm font-bold mb-2 ">
      <label>{label}</label>
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

const FormSignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <form className="w-full max-w-xs">
      {FormSignIn_input.map((input) => (
        <FormInputSignIn
          key={input.id}
          {...input}
          value={form[input.id]}
          onChange={handleChange}
        />
      ))}
    </form>
  );
};

export default FormSignIn;
