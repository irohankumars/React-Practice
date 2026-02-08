import { useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    age: ""
  });

  function handleFormData(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormData({
      email: "",
      password: "",
      age: ""
    });
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label htmlFor="email">Email: </label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleFormData}
      />
      <br />

      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleFormData}
      />
      <br />

      <label>Age: </label>
      <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleFormData}
        min={0}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}
