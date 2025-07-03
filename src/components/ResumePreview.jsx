// src/components/ResumePreview.jsx
import React from 'react';

function ResumePreview({ data }) {
  const {
    nome,
    email,
    telefone,
    linkedin,
    objetivo,
    formacoes,
    experienciasProfissionais,
    experienciasAcademicas,
    cursos,
    certificados,
    habilidades,
    idiomas,
  } = data;

  return (
    <div className="resume-preview" style={{ background: '#fff', padding: '1rem', marginTop: '2rem', borderRadius: '6px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h2>{nome || 'Seu Nome Aqui'}</h2>
      <p>
        Email: {email || 'email@exemplo.com'} | Tel: {telefone || '(xx) xxxxx-xxxx'} | LinkedIn: {linkedin || 'linkedin.com/in/seu-nome'}
      </p>

      {objetivo && (
        <>
          <h3>Objetivo</h3>
          <p>{objetivo}</p>
        </>
      )}

      {formacoes.length > 0 && (
        <>
          <h3>Formação Acadêmica</h3>
          {formacoes.map((f, i) => (
            <p key={i}>
              <strong>{f.curso}</strong> - {f.instituicao} ({f.anoConclusao})
            </p>
          ))}
        </>
      )}

      {experienciasProfissionais.length > 0 && (
        <>
          <h3>Experiência Profissional</h3>
          {experienciasProfissionais.map((exp, i) => (
            <div key={i}>
              <p>
                <strong>{exp.cargo}</strong> - {exp.empresa} ({exp.periodo})
              </p>
              <p>{exp.descricao}</p>
            </div>
          ))}
        </>
      )}

      {experienciasAcademicas.length > 0 && (
        <>
          <h3>Experiência Acadêmica</h3>
          {experienciasAcademicas.map((exp, i) => (
            <div key={i}>
              <p>
                <strong>{exp.atividade}</strong> - {exp.instituicao}
              </p>
              <p>{exp.descricao}</p>
            </div>
          ))}
        </>
      )}

      {cursos.length > 0 && (
        <>
          <h3>Cursos</h3>
          <ul>
            {cursos.map((curso, i) => (
              <li key={i}>
                {curso.nomeCurso} - {curso.instituicaoCurso} ({curso.anoCurso})
              </li>
            ))}
          </ul>
        </>
      )}

      {certificados.length > 0 && (
        <>
          <h3>Certificados</h3>
          <ul>
            {certificados.map((cert, i) => (
              <li key={i}>
                {cert.nomeCertificado} - {cert.emissor} ({cert.anoCertificado})
              </li>
            ))}
          </ul>
        </>
      )}

      {habilidades && (
        <>
          <h3>Habilidades Técnicas</h3>
          <p>{habilidades}</p>
        </>
      )}

      {idiomas && (
        <>
          <h3>Idiomas e Conhecimentos</h3>
          <ul>
            <li>Inglês: {idiomas.ingles}</li>
            <li>Espanhol: {idiomas.espanhol}</li>
            <li>Francês: {idiomas.frances}</li>
            <li>Outros: {idiomas.outros}</li>
            <li>Pacote Office: {idiomas.pacoteOffice}</li>
            <li>Outros Softwares: {idiomas.outrosSoftwares}</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default ResumePreview;
