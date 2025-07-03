// src/components/SkillsForm.jsx
import React from 'react';

function SkillsForm() {
  return (
    <section>
      <h2>Habilidades Técnicas</h2>
      <textarea
        name="habilidades"
        placeholder="Ex: HTML, CSS, JavaScript, React, Figma..."
        rows="3"
      />
    </section>
  );
}

export default SkillsForm;
