import React from 'react';

function LanguagesForm({ formData, setFormData }) {
  const options = ['Nenhum', 'Básico', 'Intermediário', 'Avançado', 'Fluente', 'Outro'];

  const idiomas = formData.idiomas || {};

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      idiomas: {
        ...prev.idiomas,
        [name]: value,
        // Se mudou para diferente de 'Outro', limpa o campo do nome personalizado
        ...(value !== 'Outro' && name === 'outros' ? { outrosNome: '' } : {})
      }
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      idiomas: {
        ...prev.idiomas,
        [name]: value
      }
    }));
  };

  return (
    <section>
      <h2>Idiomas e Conhecimentos</h2>
      {['ingles', 'espanhol', 'frances', 'outros'].map((idioma) => (
        <div key={idioma} style={{ marginBottom: '1rem' }}>
          <label style={{ marginRight: '0.5rem', textTransform: 'capitalize' }}>
            {idioma === 'outros' ? 'Outros idiomas' : idioma}:
          </label>
          <select
            name={idioma}
            value={idiomas[idioma] || 'Nenhum'}
            onChange={handleSelectChange}
          >
            {options.map((nivel) => (
              <option key={nivel} value={nivel}>{nivel}</option>
            ))}
          </select>

          {/* Se for "outros" e estiver selecionado "Outro", mostra o input para nome */}
          {idioma === 'outros' && idiomas.outros === 'Outro' && (
            <input
              type="text"
              name="outrosNome"
              placeholder="Qual outro idioma?"
              value={idiomas.outrosNome || ''}
              onChange={handleInputChange}
              style={{ marginLeft: '0.5rem', padding: '0.3rem', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          )}
        </div>
      ))}

      <h3>Pacote Office</h3>
      <select
        name="pacoteOffice"
        value={idiomas.pacoteOffice || 'Nenhum'}
        onChange={handleSelectChange}
        style={{ marginBottom: '1rem' }}
      >
        {options.slice(0, -1).map((nivel) => ( // sem a opção Outro aqui
          <option key={nivel} value={nivel}>{nivel}</option>
        ))}
      </select>

      <h3>Outros Softwares</h3>
      <textarea
        name="outrosSoftwares"
        placeholder="Ex: Canva, Photoshop, Excel Avançado..."
        rows="2"
        value={idiomas.outrosSoftwares || ''}
        onChange={handleInputChange}
      />
    </section>
  );
}

export default LanguagesForm;
