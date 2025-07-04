import React from 'react';

function EducationForm({ formacoes, setFormacoes }) {
  const handleChange = (index, field, value) => {
    const newFormacoes = [...formacoes];
    newFormacoes[index][field] = value;
    setFormacoes(newFormacoes);
  };

  const handleAdd = () => {
    setFormacoes([...formacoes, { curso: '', instituicao: '', anoConclusao: '' }]);
    setTimeout(() => {
      document.getElementById('education-last')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleRemove = (index) => {
    if (window.confirm('Deseja realmente remover esta formação?')) {
      const newFormacoes = formacoes.filter((_, i) => i !== index);
      setFormacoes(newFormacoes);
    }
  };

  return (
    <section>
      <h2>Formação</h2>
      {formacoes.length === 0 && <p>Nenhuma formação adicionada.</p>}
      {formacoes.map((formacao, i) => (
        <div
          key={i}
          className="dynamic-item"
          id={i === formacoes.length - 1 ? 'education-last' : undefined}
          tabIndex={-1}
        >
          <h4>Formação {i + 1}</h4>
          <label>
            Curso:
            <input
              type="text"
              value={formacao.curso}
              onChange={(e) => handleChange(i, 'curso', e.target.value)}
            />
          </label>
          <label>
            Instituição:
            <input
              type="text"
              value={formacao.instituicao}
              onChange={(e) => handleChange(i, 'instituicao', e.target.value)}
            />
          </label>
          <label>
            Ano de Conclusão:
            <input
              type="text"
              value={formacao.anoConclusao}
              onChange={(e) => handleChange(i, 'anoConclusao', e.target.value)}
            />
          </label>

          <button
            type="button"
            className="remove-btn"
            aria-label={`Remover formação ${i + 1}`}
            onClick={() => handleRemove(i)}
          >
            Remover
          </button>
        </div>
      ))}

      <button type="button" className="add-btn" onClick={handleAdd}>
        Adicionar Formação
      </button>
    </section>
  );
}

export default EducationForm;
