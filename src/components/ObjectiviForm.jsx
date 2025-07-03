// src/components/ObjectiveForm.jsx
import React from 'react';

function ObjectiveForm() {
  return (
    <section>
      <h2>Objetivo Profissional</h2>
      <textarea
        name="objetivo"
        placeholder="Ex: Busco minha primeira oportunidade na área de tecnologia..."
        rows="4"
      />
    </section>
  );
}

export default ObjectiveForm;
