import React from 'react';

function SkillsForm({ formData, updateField }) {
  const handleChange = (e) => {
    updateField('habilidades', e.target.value);
  };

  return (
    <section>
      <h2>Habilidades Técnicas</h2>
      <label htmlFor="habilidades" style={{ display: 'block', marginBottom: '0.5rem' }}>
        Liste suas principais habilidades técnicas:
      </label>
      <textarea
        id="habilidades"
        name="habilidades"
        placeholder="Ex: HTML, CSS, JavaScript, React, Figma..."
        rows="3"
        value={formData.habilidades || ''}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '0.6rem',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          resize: 'vertical',
        }}
      />
    </section>
  );
}

export default SkillsForm;
