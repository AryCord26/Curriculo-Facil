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
      <h2>Formação Acadêmica</h2>
      {formacoes.length === 0 && <p>Nenhuma formação adicionada.</p>}

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

          <button
            type="button"
            onClick={() => removeFormation(i)}
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
        onClick={addFormation}
        style={addButtonStyle}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#356ac3'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--cor-principal)'}
      >
        Adicionar Formação
      </button>
    </section>
  );
}

export default EducationForm;
