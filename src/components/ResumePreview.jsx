import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaBook, FaGlobe } from 'react-icons/fa';
import '../styles/ResumePreview.css';

function ResumePreview({ data }) {
  const {
    nome,
    email,
    telefone,
    linkedin,
    objetivo,
    formacoes = [],
    experienciasProfissionais = [],
    cursos = [],
    certificados = [],
    habilidades,
    idiomas = {},
    conhecimentos = {},
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
          {( ['ingles', 'espanhol', 'frances'].some(lang => idiomas[lang] && idiomas[lang] !== 'Nenhum') ||
            (Array.isArray(idiomas.outrosIdiomas) && idiomas.outrosIdiomas.some(item => item.nome && item.nivel && item.nivel !== 'Nenhum'))
          ) && (
            <>
              <h3><FaGlobe /> Idiomas</h3>
              <ul>
                {['ingles', 'espanhol', 'frances'].map((lang) =>
                  idiomas[lang] && idiomas[lang] !== 'Nenhum' ? (
                    <li key={lang}>
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}: {idiomas[lang]}
                    </li>
                  ) : null
                )}

                {Array.isArray(idiomas.outrosIdiomas) && idiomas.outrosIdiomas.length > 0 &&
                  idiomas.outrosIdiomas.map((item, i) =>
                    item.nome && item.nivel && item.nivel !== 'Nenhum' ? (
                      <li key={i}>
                        {item.nome}: {item.nivel}
                      </li>
                    ) : null
                  )
                }
              </ul>
            </>
          )}
        </>
      )}

      {conhecimentos && (conhecimentos.pacoteOffice || conhecimentos.outros) && (
        <>
          <h3>Conhecimentos Gerais</h3>
          <ul>
            {conhecimentos.pacoteOffice && (
              <li>Pacote Office: {conhecimentos.pacoteOffice}</li>
            )}
            {conhecimentos.outros && (
              <li>Outros: {conhecimentos.outros}</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default ResumePreview;
