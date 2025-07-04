import React from 'react';

function EducationForm({ formData, setFormData }) {
  const { formacoes } = formData;

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFormacoes = [...formacoes];
    newFormacoes[index][name] = value;
    setFormData(prev => ({ ...prev, formacoes: newFormacoes }));
  };

  const addFormation = () => {
    setFormData(prev => ({
      ...prev,
      formacoes: [...prev.formacoes, { curso: '', instituicao: '', anoConclusao: '' }],
    }));
    setTimeout(() => {
      document.getElementById('formation-last')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const removeFormation = (index) => {
    if(window.confirm("Deseja realmente remover esta formação?")) {
      const newFormacoes = formacoes.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, formacoes: newFormacoes }));
    }
  };

  return (
    <section>
      <h2>Formação Acadêmica</h2>
      {formacoes.length === 0 && <p>Nenhuma formação adicionada.</p>}

      {formacoes.map((formacao, i) => (
        <div
          key={i}
          className="dynamic-item"
          id={i === formacoes.length - 1 ? 'formation-last' : undefined}
          tabIndex={-1}
        >
          <h4>Formação {i + 1}</h4>

          <div className="form-row">
            <label>
              Curso:
              <input
                type="text"
                name="curso"
                value={formacao.curso}
                onChange={e => handleChange(i, e)}
              />
            </label>

            <label>
              Instituição:
              <input
                type="text"
                name="instituicao"
                value={formacao.instituicao}
                onChange={e => handleChange(i, e)}
              />
            </label>

            <label>
              Ano de Conclusão:
              <input
                type="text"
                name="anoConclusao"
                value={formacao.anoConclusao}
                onChange={e => handleChange(i, e)}
              />
            </label>
          </div>

          <button
            type="button"
            className="remove-btn"
            aria-label={`Remover formação ${i + 1}`}
            onClick={() => removeFormation(i)}
          >
            &times;
          </button>
        </div>
      ))}

      <button type="button" className="add-btn" onClick={addFormation}>
        Adicionar Formação
      </button>
    </section>
  );
}

export default EducationForm;
