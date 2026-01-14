import React, { createContext, useContext, useState } from "react";
import "./Form.css";

// 1️⃣ Create Context
const FormContext = createContext();

// 2️⃣ Parent Component
function Form({ children }) {
  const [value, setValue] = useState("");

  return (
    <FormContext.Provider value={{ value, setValue }}>
      <div className="form">{children}</div>
    </FormContext.Provider>
  );
}

// 3️⃣ Label
function Label({ children }) {
  return <label>{children}</label>;
}

// 4️⃣ Input
function Input() {
  const { value, setValue } = useContext(FormContext);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// 5️⃣ Error  ← THIS is where your code goes
function Error() {
  const { value } = useContext(FormContext);

  if (!value) {
    return <p className="form-error">Required</p>;
  }
  return null;
}

// 6️⃣ Attach compound components
Form.Label = Label;
Form.Input = Input;
Form.Error = Error;

// 7️⃣ Export
export default Form;
