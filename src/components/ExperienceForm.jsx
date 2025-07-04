import React from 'react';

function ExperienceForm({ formData, setFormData }) {
  const { experienciasProfissionais } = formData;

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...experienciasProfissionais];
    updated[index][name] = value;
    setFormData(prev => ({ ...prev, experienciasProfissionais: updated }));
  };

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experienciasProfissionais: [
        ...prev.experienciasProfissionais,
        { empresa: '', cargo: '', periodo: '', descricao: '' },
      ],
    }));
  };

  const removeExperience = (index) => {
    const updated = experienciasProfissionais.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, experienciasProfissionais: updated }));
  };

  return (
    <section>
      <h2>Experiência Profissional</h2>
      {experienciasProfissionais.length === 0 && <p>Nenhuma experiência adicionada.</p>}

      {experienciasProfissionais.map((exp, i) => (
        <fieldset key={i} className="form-section" style={{ border: '1px solid var(--cor-borda)', padding: '1rem', borderRadius: '8px' }}>
          <legend>Experiência #{i + 1}</legend>

          <label htmlFor={`empresa-${i}`}>
            Empresa:
            <input
              type="text"
              id={`empresa-${i}`}
              name="empresa"
              value={exp.empresa}
              onChange={(e) => handleChange(i, e)}
              placeholder="Ex: Nome da empresa"
            />
          </label>

          <label htmlFor={`cargo-${i}`}>
            Cargo:
            <input
              type="text"
              id={`cargo-${i}`}
              name="cargo"
              value={exp.cargo}
              onChange={(e) => handleChange(i, e)}
              placeholder="Ex: Analista de Sistemas"
            />
          </label>

          <label htmlFor={`periodo-${i}`}>
            Período:
            <input
              type="text"
              id={`periodo-${i}`}
              name="periodo"
              value={exp.periodo}
              onChange={(e) => handleChange(i, e)}
              placeholder="Ex: Jan/2020 - Dez/2022"
            />
          </label>

          <label htmlFor={`descricao-${i}`}>
            Descrição:
            <textarea
              id={`descricao-${i}`}
              name="descricao"
              value={exp.descricao}
              onChange={(e) => handleChange(i, e)}
              rows={3}
              placeholder="Principais responsabilidades e conquistas"
            />
          </label>

          <button
            type="button"
            className="btn-remove"
            onClick={() => removeExperience(i)}
          >
            Remover Experiência
          </button>
        </fieldset>
      ))}

      <button
        type="button"
        className="btn-add-experience"
        onClick={addExperience}
      >
        Adicionar Experiência
      </button>
    </section>
  );
}

export default ExperienceForm;
