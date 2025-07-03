// src/components/ResumePreview.jsx
import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaBook, FaGlobe } from 'react-icons/fa';

function ResumePreview({ data }) {
  const {
    nome,
    email,
    telefone,
    linkedin,
    objetivo,
    formacoes = [],
    experienciasProfissionais = [],
    experienciasAcademicas = [],
    cursos = [],
    certificados = [],
    habilidades,
    idiomas = {},
  } = data;

  return (
    <div className="resume-preview" style={{ backgroundColor: 'var(--cor-fundo)', color: 'var(--cor-texto)', padding: '1.5rem 2rem', marginTop: '2rem', borderRadius: '10px', boxShadow: '0 0 15px rgba(0,0,0,0.1)', fontFamily: 'var(--fonte-principal)' }}>
      <h2 style={{ color: 'var(--cor-principal)', marginBottom: '0.3rem' }}>{nome || 'Seu Nome Aqui'}</h2>
      <p style={{ marginBottom: '1rem' }}>
        Email: {email || 'email@exemplo.com'} | Tel: {telefone || '(xx) xxxxx-xxxx'} | LinkedIn: {linkedin || 'linkedin.com/in/seu-nome'}
      </p>

      {objetivo && (
        <>
          <h3 style={{ color: 'var(--cor-principal)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaBook /> Objetivo
          </h3>
          <p>{objetivo}</p>
        </>
      )}

      {formacoes.length > 0 && (
        <>
          <h3 style={{ color: 'var(--cor-principal)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaGraduationCap /> Formação Acadêmica
          </h3>
          {formacoes.map((f, i) => (
            <p key={i}>
              <strong>{f.curso}</strong> - {f.instituicao} ({f.anoConclusao})
            </p>
          ))}
        </>
      )}

      {experienciasProfissionais.length > 0 && (
        <>
          <h3 style={{ color: 'var(--cor-principal)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaBriefcase /> Experiência Profissional
          </h3>
          {experienciasProfissionais.map((exp, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
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
          <h3 style={{ color: 'var(--cor-principal)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaBriefcase /> Experiência Acadêmica
          </h3>
          {experienciasAcademicas.map((exp, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
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
          <h3 style={{ color: 'var(--cor-principal)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaBook /> Cursos
          </h3>
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
          <h3 style={{ color: 'var(--cor-principal)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaCertificate /> Certificados
          </h3>
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
          <h3 style={{ color: 'var(--cor-principal)' }}>Habilidades Técnicas</h3>
          <p>{habilidades}</p>
        </>
      )}

      {idiomas && (
        <>
          <h3 style={{ color: 'var(--cor-principal)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaGlobe /> Idiomas e Conhecimentos
          </h3>
          <ul>
            <li>Inglês: {idiomas.ingles || 'Nenhum'}</li>
            <li>Espanhol: {idiomas.espanhol || 'Nenhum'}</li>
            <li>Francês: {idiomas.frances || 'Nenhum'}</li>
            <li>Outros: {idiomas.outros || 'Nenhum'}</li>
            <li>Pacote Office: {idiomas.pacoteOffice || 'Nenhum'}</li>
            <li>Outros Softwares: {idiomas.outrosSoftwares || 'Nenhum'}</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default ResumePreview;
