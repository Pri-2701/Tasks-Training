import { useState } from "react";

function AllComponents() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.name) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    }

    if (!form.password) {
    newErrors.password = "Password is required";
  } else if (form.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    const isValid = validate();
    if(isValid) {
      alert("Form Submitted Sucessfully");    }
  };

  return (
    <div className="form-wrapper">
  <h2>Form React</h2>

  <form onSubmit={handleSubmit}>
    <label>Name</label>
    <input
      type="text"
      name="name"
      value={form.name}
      onChange={handleChange}
      className={errors.name ? "input-error" : ""}
      placeholder="Enter Name"
    />
    <p className="error-text">{errors.name}</p>

    <label>Email</label>
    <input
      type="email"
      name="email"
      value={form.email}
      onChange={handleChange}
      className={errors.email ? "input-error" : ""}
      placeholder="Enter Email"
    />
    <p className="error-text">{errors.email}</p>

    <label>Password</label>
    <input
      type="password"
      name="password"
      value={form.password}
      onChange={handleChange}
      className={errors.password ? "input-error" : ""}
      placeholder="Enter Password"
    />
    <p className="error-text">{errors.password}</p>

    <button type="submit">Submit</button>
  </form>
</div>

  );
}

export default AllComponents;
