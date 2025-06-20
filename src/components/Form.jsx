import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [form, setForm] = useState({
    category: "",
    title: "",
    date: "",
    location: "",
    price: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.category) newErrors.category = "Kategorie ist erforderlich";
    if (!form.title) newErrors.title = "Titel ist erforderlich";
    if (!form.date) newErrors.date = "Datum ist erforderlich";
    if (!form.location) newErrors.location = "Standort ist erforderlich";
    if (!form.price) newErrors.price = "Preis ist erforderlich";
    if (!form.details) newErrors.details = "Details sind erforderlich";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      navigate("/success");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Kategorie</option>
        <option value="music">Musik</option>
        <option value="sport">Sport</option>
        <option value="art">Kunst</option>
      </select>
      {errors.category && <p style={{ color: "red" }}>{errors.category}</p>}

      <input
        type="text"
        name="title"
        placeholder="Titel"
        value={form.title}
        onChange={handleChange}
      />
      {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />
      {errors.date && <p style={{ color: "red" }}>{errors.date}</p>}

      <input
        type="text"
        name="location"
        placeholder="Standort"
        value={form.location}
        onChange={handleChange}
      />
      {errors.location && <p style={{ color: "red" }}>{errors.location}</p>}

      <input
        type="text"
        name="price"
        placeholder="Preis"
        value={form.price}
        onChange={handleChange}
      />
      {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}

      <textarea
        name="details"
        placeholder="Details zur Veranstaltung"
        value={form.details}
        onChange={handleChange}
      />
      {errors.details && <p style={{ color: "red" }}>{errors.details}</p>}
      <button type="submit" style={{ marginTop: "10px"  }}>
        Event einsenden
      </button>
    </form>
  );
};
export default Form;
