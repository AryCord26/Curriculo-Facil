import React from 'react';

function ExperienceForm({ experienciasProfissionais, setExperienciasProfissionais }) {
  const handleChange = (index, field, value) => {
    const newExperiences = [...experienciasProfissionais];
    newExperiences[index][field] = value;
    setExperienciasProfissionais(newExperiences);
  };

  const handleAdd = () => {
    setExperienciasProfissionais([
      ...experienciasProfissionais,
      { empresa: '', cargo: '', periodo: '', descricao: '' },
    ]);
    setTimeout(() => {
      document.getElementById('experience-last')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleRemove = (index) => {
    if (window.confirm('Deseja realmente remover esta experiência?')) {
      const newExperiences = experienciasProfissionais.filter((_, i) => i !== index);
      setExperienciasProfissionais(newExperiences);
    }
  };

  return (
    <section>
      <h2>Experiência Profissional</h2>
      {experienciasProfissionais.length === 0 && <p>Nenhuma experiência adicionada.</p>}
      {experienciasProfissionais.map((exp, i) => (
        <div
          key={i}
          className="dynamic-item"
          id={i === experienciasProfissionais.length - 1 ? 'experience-last' : undefined}
          tabIndex={-1}
        >
          <h4>Experiência {i + 1}</h4>
          <label>
            Empresa:
            <input
              type="text"
              value={exp.empresa}
              onChange={(e) => handleChange(i, 'empresa', e.target.value)}
            />
          </label>
          <label>
            Cargo:
            <input
              type="text"
              value={exp.cargo}
              onChange={(e) => handleChange(i, 'cargo', e.target.value)}
            />
          </label>
          <label>
            Período:
            <input
              type="text"
              value={exp.periodo}
              onChange={(e) => handleChange(i, 'periodo', e.target.value)}
            />
          </label>
          <label>
            Descrição:
            <textarea
              value={exp.descricao}
              onChange={(e) => handleChange(i, 'descricao', e.target.value)}
            />
          </label>

          <button
            type="button"
            className="remove-btn"
            aria-label={`Remover experiência ${i + 1}`}
            onClick={() => handleRemove(i)}
          >
            Remover
          </button>
        </div>
      ))}

      <button type="button" className="add-btn" onClick={handleAdd}>
        Adicionar Experiência
      </button>
    </section>
  );
}

export default ExperienceForm;
