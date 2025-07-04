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
    setCourses([
      ...courses,
      { nome: '', instituicao: '', ano: '', imagem: null, preview: null }
    ]);
  };

  const handleRemove = (index) => {
    const newCourses = courses.filter((_, i) => i !== index);
    setCourses(newCourses);
  };

  const handleFileChange = (index, file) => {
    const newCourses = [...courses];
    newCourses[index].imagem = file || null;
    newCourses[index].preview = file ? URL.createObjectURL(file) : null;
    setCourses(newCourses);
  };

  return (
    <section>
      <h2>Cursos</h2>
      {courses.length === 0 && <p>Nenhum curso adicionado.</p>}
      {courses.map((course, i) => {
        const nomeId = `nome-curso-${i}`;
        const instId = `instituicao-curso-${i}`;
        const anoId = `ano-curso-${i}`;
        const fileId = `file-curso-${i}`;

        return (
          <fieldset key={i} style={{ marginBottom: '1.5rem', padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}>
            <legend>Curso #{i + 1}</legend>

            <label htmlFor={nomeId}>
              Nome do Curso:
              <input
                type="text"
                id={nomeId}
                value={course.nome}
                onChange={e => handleChange(i, 'nome', e.target.value)}
              />
            </label>

            <label htmlFor={instId}>
              Instituição:
              <input
                type="text"
                id={instId}
                value={course.instituicao}
                onChange={e => handleChange(i, 'instituicao', e.target.value)}
              />
            </label>

            <label htmlFor={anoId}>
              Ano:
              <input
                type="text"
                id={anoId}
                value={course.ano}
                onChange={e => handleChange(i, 'ano', e.target.value)}
              />
            </label>

            <label htmlFor={fileId}>
              Upload do Certificado:
              <input
                type="file"
                id={fileId}
                accept="image/*"
                onChange={e => handleFileChange(i, e.target.files[0])}
              />
            </label>

            {course.preview && (
              <img
                src={course.preview}
                alt={`Certificado do curso ${course.nome || i + 1}`}
                style={{ maxWidth: '150px', marginTop: '0.5rem', borderRadius: '6px', boxShadow: '0 0 6px rgba(0,0,0,0.1)' }}
              />
            )}

            <button
              type="button"
              onClick={() => handleRemove(i)}
              style={{ marginTop: '0.7rem', backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
            >
              Remover Curso
            </button>
          </fieldset>
        );
      })}

      <button
        type="button"
        onClick={handleAdd}
        style={{ backgroundColor: '#4a90e2', color: 'white', border: 'none', padding: '0.7rem 1.5rem', borderRadius: '8px', cursor: 'pointer' }}
      >
        Adicionar Curso
      </button>
    </section>
  );
}

export default CoursesForm;
