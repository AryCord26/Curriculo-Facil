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
  };

  const removeFormation = (index) => {
    const newFormacoes = formacoes.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, formacoes: newFormacoes }));
  };

  return (
    <section>
      <h2>Formação Acadêmica</h2>

      {formacoes.length === 0 && <p>Nenhuma formação adicionada.</p>}

      {formacoes.map((formacao, i) => (
        <fieldset key={i} className="form-section" style={{ border: '1px solid var(--cor-borda)', padding: '1rem', borderRadius: '8px' }}>
          <legend>Formação #{i + 1}</legend>

          <label htmlFor={`curso-${i}`}>
            Curso:
            <input
              type="text"
              id={`curso-${i}`}
              name="curso"
              value={formacao.curso}
              onChange={(e) => handleChange(i, e)}
              placeholder="Ex: Bacharelado em Ciência da Computação"
            />
          </label>

          <label htmlFor={`instituicao-${i}`}>
            Instituição:
            <input
              type="text"
              id={`instituicao-${i}`}
              name="instituicao"
              value={formacao.instituicao}
              onChange={(e) => handleChange(i, e)}
              placeholder="Nome da universidade ou escola"
            />
          </label>

          <label htmlFor={`anoConclusao-${i}`}>
            Ano de Conclusão:
            <input
              type="text"
              id={`anoConclusao-${i}`}
              name="anoConclusao"
              value={formacao.anoConclusao}
              onChange={(e) => handleChange(i, e)}
              placeholder="Ex: 2025"
            />
          </label>

          <button
            type="button"
            onClick={() => removeFormation(i)}
            className="btn-remove"
          >
            Remover Formação
          </button>
        </fieldset>
      ))}

      <button type="button" onClick={addFormation} className="btn-add-formation">
        Adicionar Formação
      </button>
    </section>
  );
}

export default EducationForm;
