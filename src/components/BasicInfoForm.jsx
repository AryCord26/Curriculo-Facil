// src/components/BasicInfoForm.jsx
import React from 'react';

function BasicInfoForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section>
      <h2>Informações Básicas</h2>
      <form className="form-section">
        <label>
          Nome Completo:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Telefone:
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
        </label>
        <label>
          LinkedIn:
          <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        </label>
      </form>
    </section>
  );
}

export default BasicInfoForm;
