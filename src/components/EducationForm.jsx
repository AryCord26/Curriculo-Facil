// src/components/EducationForm.jsx
import React from 'react';

function EducationForm() {
  return (
    <section>
      <h2>Formação Acadêmica</h2>
      <form className="form-section">
        <label>
          Curso:
          <input type="text" name="curso" />
        </label>
        <label>
          Instituição:
          <input type="text" name="instituicao" />
        </label>
        <label>
          Ano de Conclusão:
          <input type="text" name="anoConclusao" />
        </label>
      </form>
    </section>
  );
}

export default EducationForm;
