// src/components/CoursesForm.jsx
import React from 'react';

function CoursesForm() {
  return (
    <section>
      <h2>Cursos</h2>
      <form className="form-section">
        <label>
          Nome do Curso:
          <input type="text" name="cursoExtra" />
        </label>
        <label>
          Instituição:
          <input type="text" name="instituicaoCurso" />
        </label>
        <label>
          Ano:
          <input type="text" name="anoCurso" />
        </label>
      </form>
    </section>
  );
}

export default CoursesForm;
