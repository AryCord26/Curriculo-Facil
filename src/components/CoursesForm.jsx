import React from 'react';

function CoursesForm({ courses, setCourses }) {

  const handleChange = (index, field, value) => {
    const newCourses = [...courses];
    newCourses[index][field] = value;
    setCourses(newCourses);
  };

  const handleAdd = () => {
    setCourses([...courses, { nome: '', instituicao: '', ano: '', imagem: null }]);
  };

  const handleRemove = (index) => {
    if (courses.length === 1) return; // Mantém pelo menos um
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  const handleFileChange = (index, file) => {
    const newCourses = [...courses];
    newCourses[index].imagem = file;
    setCourses(newCourses);
  };

  return (
    <section>
      <h2>Cursos</h2>
      {courses.map((course, i) => (
        <form key={i} className="form-section">
          <label>
            Nome do Curso:
            <input
              type="text"
              value={course.nome}
              onChange={e => handleChange(i, 'nome', e.target.value)}
            />
          </label>
          <label>
            Instituição:
            <input
              type="text"
              value={course.instituicao}
              onChange={e => handleChange(i, 'instituicao', e.target.value)}
            />
          </label>
          <label>
            Ano:
            <input
              type="text"
              value={course.ano}
              onChange={e => handleChange(i, 'ano', e.target.value)}
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
