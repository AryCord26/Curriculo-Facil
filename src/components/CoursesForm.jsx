import React, { useState, useEffect } from 'react';

function CoursesForm({ cursos, setCursos }) {
  const [courses, setCourses] = useState(cursos || []);

  useEffect(() => {
    setCursos(courses);
  }, [courses, setCursos]);

  const handleChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const handleAdd = () => {
    setCourses([...courses, { nomeCurso: '', instituicaoCurso: '', anoCurso: '', imagemCurso: null }]);
  };

  const handleRemove = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  const handleFileChange = (index, file) => {
    const newCourses = [...courses];
    newCourses[index].imagemCurso = file ? URL.createObjectURL(file) : null;
    setCourses(newCourses);
  };

  return (
    <section>
      <h2>Cursos</h2>
      {courses.length === 0 && <p>Nenhum curso adicionado.</p>}
      {courses.map((course, i) => (
        <form key={i} className="form-section" onSubmit={e => e.preventDefault()}>
          <label>
            Nome do Curso:
            <input
              type="text"
              value={course.nomeCurso}
              onChange={e => handleChange(i, 'nomeCurso', e.target.value)}
            />
          </label>
          <label>
            Instituição:
            <input
              type="text"
              value={course.instituicaoCurso}
              onChange={e => handleChange(i, 'instituicaoCurso', e.target.value)}
            />
          </label>
          <label>
            Ano:
            <input
              type="text"
              value={course.anoCurso}
              onChange={e => handleChange(i, 'anoCurso', e.target.value)}
            />
          </label>
          <label>
            Upload do Certificado do Curso:
            <input
              type="file"
              accept="image/*"
              onChange={e => handleFileChange(i, e.target.files[0])}
            />
          </label>

          <button type="button" onClick={() => handleRemove(i)}>
            Remover Curso
          </button>
        </form>
      ))}

      <button type="button" onClick={handleAdd}>
        Adicionar Curso
      </button>
    </section>
  );
}

export default CoursesForm;
