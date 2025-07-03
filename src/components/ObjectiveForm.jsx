// src/components/ObjectiveForm.jsx
import React from 'react';

function ObjectiveForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, objetivo: e.target.value }));
  };

  return (
    <section>
      <h2>Objetivo Profissional</h2>
      <textarea
        name="objetivo"
        placeholder="Ex: Busco minha primeira oportunidade na área de tecnologia..."
        rows="4"
        value={formData.objetivo}
        onChange={handleChange}
      />
    </section>
  );
}

export default ObjectiveForm;
