import React from 'react';

function LanguagesForm({ formData, setFormData }) {
  const options = ['Nenhum', 'Básico', 'Intermediário', 'Avançado', 'Fluente'];
  const idiomas = formData.idiomas || {};
  const outrosIdiomas = idiomas.outrosIdiomas || [];

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      idiomas: {
        ...prev.idiomas,
        [name]: value,
      }
    }));
  };

  const handleOutrosChange = (index, field, value) => {
    const updated = [...outrosIdiomas];
    updated[index][field] = value;

    setFormData(prev => ({
      ...prev,
      idiomas: {
        ...prev.idiomas,
        outrosIdiomas: updated,
      }
    }));
  };

  const handleAddIdioma = () => {
    setFormData(prev => ({
      ...prev,
      idiomas: {
        ...prev.idiomas,
        outrosIdiomas: [...(prev.idiomas.outrosIdiomas || []), { nome: '', nivel: 'Nenhum' }]
      }
    }));
  };

  const handleRemoveIdioma = (index) => {
    const updated = outrosIdiomas.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      idiomas: {
        ...prev.idiomas,
        outrosIdiomas: updated,
      }
    }));
  };

  return (
    <section>
      <h2>Idiomas</h2>

      {['ingles', 'espanhol', 'frances'].map((idioma) => (
        <label key={idioma} htmlFor={idioma} style={{ marginBottom: '1rem', textTransform: 'capitalize' }}>
          {idioma}:
          <select
            id={idioma}
            name={idioma}
            value={idiomas[idioma] || 'Nenhum'}
            onChange={handleSelectChange}
            style={{ marginTop: '0.3rem' }}
          >
            {options.map((nivel) => (
              <option key={nivel} value={nivel}>{nivel}</option>
            ))}
          </select>
        </label>
      ))}

      <h3>Outros Idiomas</h3>
      {outrosIdiomas.map((item, i) => (
        <div key={i} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Idioma"
            value={item.nome}
            onChange={e => handleOutrosChange(i, 'nome', e.target.value)}
            style={{ flex: '1 1 40%' }}
          />
          <select
            value={item.nivel}
            onChange={e => handleOutrosChange(i, 'nivel', e.target.value)}
            style={{ flex: '1 1 40%' }}
          >
            {options.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <button
            type="button"
            onClick={() => handleRemoveIdioma(i)}
            style={{
              backgroundColor: '#d9534f',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              padding: '0.5rem 0.8rem',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#c9302c'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#d9534f'}
          >
            Remover
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddIdioma}
        style={{
          marginTop: '1rem',
          backgroundColor: 'var(--cor-principal)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '0.7rem 1.2rem',
          fontSize: '1rem',
          cursor: 'pointer',
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#356ac3'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--cor-principal)'}
      >
        Adicionar Outro Idioma
      </button>
    </section>
  );
}

export default LanguagesForm;
