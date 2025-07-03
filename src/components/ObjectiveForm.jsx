// src/components/ObjectiveForm.jsx
import React from 'react';

function ObjectiveForm({ formData, updateField }) {
  const handleChange = (e) => {
    updateField('objetivo', e.target.value);
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
