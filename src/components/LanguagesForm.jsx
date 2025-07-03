// src/components/LanguagesForm.jsx
import React from 'react';

function LanguagesForm() {
  const options = ['Nenhum', 'Básico', 'Intermediário', 'Avançado', 'Fluente'];

  return (
    <section>
      <h2>Idiomas e Conhecimentos</h2>
      {['Inglês', 'Espanhol', 'Francês', 'Outros'].map((idioma) => (
        <div key={idioma}>
          <label>{idioma}:</label>
          <select name={`idioma-${idioma.toLowerCase()}`}>
            {options.map((nivel) => (
              <option key={nivel} value={nivel}>{nivel}</option>
            ))}
          </select>
        </div>
      ))}

      <h3>Pacote Office</h3>
      <select name="office">
        {options.map((nivel) => (
          <option key={nivel} value={nivel}>{nivel}</option>
        ))}
      </select>

      <h3>Outros Softwares</h3>
      <textarea
        name="softwares"
        placeholder="Ex: Canva, Photoshop, Excel Avançado..."
        rows="2"
      />
    </section>
  );
}

export default LanguagesForm;
