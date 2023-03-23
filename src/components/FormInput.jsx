import { useEffect, useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label,clear, errorMessage, onChange, id, ...inputProps } = props;

  useEffect(()=>{
  setFocused(false);
  },[clear])
  
  const handleFocus = (e) => {
      setFocused(true);
  
  };

  return (
    <div className="formInput">
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

export default FormInput;
