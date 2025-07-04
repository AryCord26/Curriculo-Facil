import React from 'react';

function ObjectiveForm({ formData, updateField }) {
  const handleChange = (e) => {
    updateField('objetivo', e.target.value);
  };

  return (
    <section>
      <h2>Objetivo Profissional</h2>
      <label htmlFor="objetivo" style={{ display: 'block', marginBottom: '0.5rem' }}>
        Descreva brevemente seu objetivo:
      </label>
      <textarea
        id="objetivo"
        name="objetivo"
        aria-label="Objetivo profissional"
        placeholder="Ex: Busco minha primeira oportunidade na área de tecnologia..."
        rows="4"
        value={formData.objetivo}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '0.6rem',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          resize: 'vertical'
        }}
      />
    </section>
  );
}

export default ObjectiveForm;
