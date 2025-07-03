import React from 'react';

function ExperienceForm({ formData, setFormData }) {
  const { experienciasProfissionais } = formData;

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newExperiences = [...experienciasProfissionais];
    newExperiences[index][name] = value;
    setFormData(prev => ({ ...prev, experienciasProfissionais: newExperiences }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experienciasProfissionais: [
        ...prev.experienciasProfissionais,
        { empresa: '', cargo: '', periodo: '', descricao: '' }
      ],
    }));
  };

  const removeExperience = (index) => {
    const newExperiences = experienciasProfissionais.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, experienciasProfissionais: newExperiences }));
  };

  const buttonStyle = {
    borderRadius: '8px',
    padding: '0.7rem 1.2rem',
    fontSize: '1rem',
    cursor: 'pointer',
    border: 'none',
    transition: 'background-color 0.3s ease',
  };

  const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'var(--cor-principal)',
    color: '#fff',
    marginTop: '1rem',
  };

  const removeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#d9534f',
    color: '#fff',
    marginTop: '0.5rem',
  };

  return (
    <section>
      <h2>Experiência Profissional</h2>
      {experienciasProfissionais.length === 0 && <p>Nenhuma experiência adicionada.</p>}

      {experienciasProfissionais.map((exp, i) => (
        <form key={i} className="form-section">
          <label>
            Empresa:
            <input
              type="text"
              name="empresa"
              value={exp.empresa}
              onChange={(e) => handleChange(i, e)}
            />
          </label>
          <label>
            Cargo:
            <input
              type="text"
              name="cargo"
              value={exp.cargo}
              onChange={(e) => handleChange(i, e)}
            />
          </label>
          <label>
            Período:
            <input
              type="text"
              name="periodo"
              value={exp.periodo}
              onChange={(e) => handleChange(i, e)}
            />
          </label>
          <label>
            Descrição:
            <textarea
              name="descricao"
              value={exp.descricao}
              onChange={(e) => handleChange(i, e)}
              rows={3}
            />
          </label>

          <button
            type="button"
            onClick={() => removeExperience(i)}
            style={removeButtonStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#c9302c'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = '#d9534f'}
          >
            Remover
          </button>
        </form>
      ))}

      <button
        type="button"
        onClick={addExperience}
        style={addButtonStyle}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#356ac3'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--cor-principal)'}
      >
        Adicionar Experiência
      </button>
    </section>
  );
}

export default ExperienceForm;
