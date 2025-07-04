import React from 'react';

function CoursesForm({ cursos, setCursos }) {
  const handleChange = (index, field, value) => {
    const newCourses = [...cursos];
    newCourses[index][field] = value;
    setCursos(newCourses);
  };

  const handleAdd = () => {
    setCursos([...cursos, { nomeCurso: '', instituicaoCurso: '', anoCurso: '', imagemCurso: null }]);
    setTimeout(() => {
      document.getElementById('course-last')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleRemove = (index) => {
    if(window.confirm("Deseja realmente remover este curso?")){
      const newCourses = cursos.filter((_, i) => i !== index);
      setCursos(newCourses);
    }
  };

  const handleFileChange = (index, file) => {
    const newCourses = [...cursos];
    newCourses[index].imagemCurso = file ? URL.createObjectURL(file) : null;
    setCursos(newCourses);
  };

  return (
    <section>
      <h2>Cursos</h2>
      {cursos.length === 0 && <p>Nenhum curso adicionado.</p>}
      {cursos.map((course, i) => (
        <div key={i} className="dynamic-item" id={i === cursos.length -1 ? 'course-last' : undefined} tabIndex={-1}>
          <h4>Curso {i + 1}</h4>
          <div className="form-row">
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
          </div>
          <label>
            Upload do Certificado do Curso:
            <input
              type="file"
              accept="image/*"
              onChange={e => handleFileChange(i, e.target.files[0])}
            />
          </label>
          {course.imagemCurso && <img src={course.imagemCurso} alt="Preview do certificado do curso" className="img-preview" />}
          <button
            type="button"
            className="remove-btn"
            aria-label={`Remover certificado ${i + 1}`}
            onClick={() => handleRemove(i)}
          >
            Remover
          </button>
        </div>
      ))}

      <button type="button" className="add-btn" onClick={handleAdd}>
        Adicionar Curso
      </button>
    </section>
  );
}

export default CoursesForm;
