// src/components/EducationForm.jsx
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
      formacoes: [...prev.formacoes, { curso: '', instituicao: '', anoConclusao: '' }]
    }));
  };

  return (
    <section>
      <h2>Formação Acadêmica</h2>
      {formacoes.map((formacao, i) => (
        <form key={i} className="form-section">
          <label>
            Curso:
            <input
              type="text"
              name="curso"
              value={formacao.curso}
              onChange={(e) => handleChange(i, e)}
            />
          </label>
          <label>
            Instituição:
            <input
              type="text"
              name="instituicao"
              value={formacao.instituicao}
              onChange={(e) => handleChange(i, e)}
            />
          </label>
          <label>
            Ano de Conclusão:
            <input
              type="text"
              name="anoConclusao"
              value={formacao.anoConclusao}
              onChange={(e) => handleChange(i, e)}
            />
          </label>
        </form>
      ))}
      <button onClick={addFormation}>Adicionar Formação</button>
    </section>
  );
}

export default EducationForm;
