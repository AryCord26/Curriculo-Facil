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
    setTimeout(() => {
      document.getElementById('idioma-last')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleRemoveIdioma = (index) => {
    if(window.confirm("Deseja realmente remover este idioma?")){
      const updated = outrosIdiomas.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        idiomas: {
          ...prev.idiomas,
          outrosIdiomas: updated,
        }
      }));
    }
  };

  return (
    <section>
      <h2>Idiomas</h2>

      {['inglês', 'espanhol', 'frances'].map((idioma) => (
        <div key={idioma} style={{ marginBottom: '1rem' }}>
          <label style={{ marginRight: '0.5rem', textTransform: 'capitalize' }}>
            {idioma}:
          </label>
          <select
            name={idioma}
            value={idiomas[idioma] || 'Nenhum'}
            onChange={handleSelectChange}
            style={{ minWidth: '140px', padding: '0.3rem' }}
          >
            {options.map((nivel) => (
              <option key={nivel} value={nivel}>{nivel}</option>
            ))}
          </select>
        </div>
      ))}

      <h3>Outros Idiomas</h3>
      {outrosIdiomas.map((item, i) => (
        <div
          key={i}
          className="dynamic-item"
          id={i === outrosIdiomas.length - 1 ? 'idioma-last' : undefined}
          tabIndex={-1}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}
        >
          <input
            type="text"
            placeholder="Idioma"
            value={item.nome}
            onChange={e => handleOutrosChange(i, 'nome', e.target.value)}
            style={{ flex: '1 1 150px', padding: '0.4rem', fontSize: '1rem' }}
          />
          <select
            value={item.nivel}
            onChange={e => handleOutrosChange(i, 'nivel', e.target.value)}
            style={{ flex: '1 1 130px', padding: '0.4rem', fontSize: '1rem' }}
          >
            {options.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
          <button
            type="button"
            className="remove-btn"
            aria-label={`Remover idioma ${i + 1}`}
            onClick={() => handleRemoveIdioma(i)}
            style={{ flexShrink: 0 }}
          >
            &times;
          </button>
        </div>
      ))}
      <button type="button" className="add-btn" onClick={handleAddIdioma}>
        Adicionar Outro Idioma
      </button>
    </section>
  );
}

export default LanguagesForm;
