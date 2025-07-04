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
    setTimeout(() => {
      document.getElementById('experience-last')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const removeExperience = (index) => {
    if(window.confirm("Deseja realmente remover esta experiência?")){
      const newExperiences = experienciasProfissionais.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, experienciasProfissionais: newExperiences }));
    }
  };

  return (
    <section>
      <h2>Experiência Profissional</h2>
      {experienciasProfissionais.length === 0 && <p>Nenhuma experiência adicionada.</p>}

      {experienciasProfissionais.map((exp, i) => (
        <div key={i} className="dynamic-item" id={i === experienciasProfissionais.length -1 ? 'experience-last' : undefined} tabIndex={-1}>
          <h4>Experiência {i + 1}</h4>
          <div className="form-row">
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
          </div>

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
            className="remove-btn"
            aria-label={`Remover certificado ${i + 1}`}
            onClick={() => handleRemove(i)}
          >
            Remover
          </button>
        </div>
      ))}

      <button
        type="button"
        className="add-btn"
        onClick={addExperience}
      >
        Adicionar Experiência
      </button>
    </section>
  );
}

export default ExperienceForm;
