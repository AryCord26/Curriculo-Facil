import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaBook, FaGlobe } from 'react-icons/fa';
import '../styles/ResumePreview.css'; // seu CSS de estilos

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
    <div className="resume-preview">
      <h2>{nome || 'Seu Nome Aqui'}</h2>
      <p>
        Email: {email || 'email@exemplo.com'} | Tel: {telefone || '(xx) xxxxx-xxxx'} | LinkedIn: {linkedin || 'linkedin.com/in/seu-nome'}
      </p>

      {objetivo && (
        <>
          <h3><FaBook /> Objetivo</h3>
          <p>{objetivo}</p>
        </>
      )}

      {formacoes.length > 0 && (
        <>
          <h3><FaGraduationCap /> Formação Acadêmica</h3>
          {formacoes.map((f, i) => (
            <p key={i}>
              <strong>{f.curso}</strong> - {f.instituicao} ({f.anoConclusao})
            </p>
          ))}
        </>
      )}

      {experienciasProfissionais.length > 0 && (
        <>
          <h3><FaBriefcase /> Experiência Profissional</h3>
          {experienciasProfissionais.map((exp, i) => (
            <div key={i} className="experience-block">
              <p><strong>{exp.cargo}</strong> - {exp.empresa} ({exp.periodo})</p>
              <p>{exp.descricao}</p>
            </div>
          ))}
        </>
      )}

      {experienciasAcademicas.length > 0 && (
        <>
          <h3><FaBriefcase /> Experiência Acadêmica</h3>
          {experienciasAcademicas.map((exp, i) => (
            <div key={i} className="experience-block">
              <p><strong>{exp.atividade}</strong> - {exp.instituicao}</p>
              <p>{exp.descricao}</p>
            </div>
          ))}
        </>
      )}

      {cursos.length > 0 && (
        <>
          <h3><FaBook /> Cursos</h3>
          <ul>
            {cursos.map((curso, i) => (
              <li key={i} style={{ marginBottom: '1rem' }}>
                <div>
                  <strong>{curso.nome}</strong> - {curso.instituicao} ({curso.ano})
                </div>
                {curso.imagem && (
                  <img
                    src={typeof curso.imagem === 'string' ? curso.imagem : URL.createObjectURL(curso.imagem)}
                    alt={`Certificado do curso ${curso.nome}`}
                    style={{ maxWidth: '200px', marginTop: '0.5rem', borderRadius: '6px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}
                  />
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      {certificados.length > 0 && (
        <>
          <h3><FaCertificate /> Certificados</h3>
          <ul>
            {certificados.map((cert, i) => (
              <li key={i} style={{ marginBottom: '1rem' }}>
                <div>
                  <strong>{cert.nome}</strong> - {cert.emissor} ({cert.ano})
                </div>
                {cert.imagem && (
                  <img
                    src={typeof cert.imagem === 'string' ? cert.imagem : URL.createObjectURL(cert.imagem)}
                    alt={`Certificado de ${cert.nome}`}
                    style={{ maxWidth: '200px', marginTop: '0.5rem', borderRadius: '6px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}
                  />
                )}
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
          <h3><FaGlobe /> Idiomas e Conhecimentos</h3>
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
