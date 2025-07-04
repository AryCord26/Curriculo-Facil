import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLinkedin, FaBriefcase, FaGraduationCap, FaBook, FaCertificate, FaTools, FaLanguage } from 'react-icons/fa';

const idiomaLabels = {
  ingles: 'Inglês',
  espanhol: 'Espanhol',
  frances: 'Francês',
};

function ResumePreview({ data }) {
  const {
    nome,
    email,
    telefone,
    linkedin,
    dataNascimento,
    disponibilidadeMudanca,
    disponibilidadeViagem,
    objetivo,
    formacoes,
    experienciasProfissionais,
    cursos,
    certificados,
    habilidades,
    idiomas,
    conhecimentos,
  } = data;

  return (
    <div className="resume-preview" style={{ fontFamily: 'var(--fonte-principal)' }}>
      {/* Header */}
      <h2>{nome || 'Seu Nome'}</h2>
      <p className="contato" style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--cor-texto)' }}>
        <FaEnvelope /> {email || 'email@exemplo.com'} | <FaPhone /> {telefone || '(xx) xxxxx-xxxx'} | <FaLinkedin /> {linkedin || 'linkedin.com/in/seu-nome'}
      </p>

      {/* Dados básicos */}
      <p><FaUser /> Nascido em: {dataNascimento || 'dd/mm/aaaa'}</p>
      <p>Disponibilidade para mudanças: {disponibilidadeMudanca ? 'Sim' : 'Não'}</p>
      <p>Disponibilidade para viagens: {disponibilidadeViagem ? 'Sim' : 'Não'}</p>

      {/* Objetivo */}
      <h3 className="section-title"><FaBook /> Objetivo</h3>
      <p>{objetivo || 'Descreva aqui seu objetivo profissional.'}</p>

      {/* Formação */}
      <h3 className="section-title"><FaGraduationCap /> Formação</h3>
      {formacoes && formacoes.length > 0 ? (
        <ul>
          {formacoes.map((f, i) => (
            <li key={i}>
              <strong>{f.curso || 'Curso não informado'}</strong> - {f.instituicao || 'Instituição não informada'} ({f.anoConclusao || 'Ano não informado'})
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma formação adicionada.</p>
      )}

      {/* Experiência Profissional */}
      <h3 className="section-title"><FaBriefcase /> Experiência Profissional</h3>
      {experienciasProfissionais && experienciasProfissionais.length > 0 ? (
        experienciasProfissionais.map((exp, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <strong>{exp.cargo || 'Cargo não informado'}</strong> - {exp.empresa || 'Empresa não informada'} ({exp.periodo || 'Período não informado'})
            <p>{exp.descricao || 'Descrição não informada'}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma experiência adicionada.</p>
      )}

      {/* Cursos */}
      <h3 className="section-title"><FaBook /> Cursos</h3>
      {cursos && cursos.length > 0 ? (
        cursos.map((curso, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <strong>{curso.nomeCurso || 'Curso não informado'}</strong> - {curso.instituicaoCurso || 'Instituição não informada'} ({curso.anoCurso || 'Ano não informado'})
            {curso.imagemCurso && (
              <figure style={{ marginTop: '0.5rem' }}>
                <img
                  src={typeof curso.imagemCurso === 'string' ? curso.imagemCurso : URL.createObjectURL(curso.imagemCurso)}
                  alt={`Certificado do curso ${curso.nomeCurso}`}
                  style={{ maxWidth: '200px', borderRadius: '6px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}
                />
              </figure>
            )}
          </div>
        ))
      ) : (
        <p>Nenhum curso adicionado.</p>
      )}

      {/* Certificados */}
      <h3 className="section-title"><FaCertificate /> Certificados</h3>
      {certificados && certificados.length > 0 ? (
        certificados.map((cert, i) => (
          <div key={i} style={{ marginBottom: '1rem' }}>
            <strong>{cert.nomeCertificado || 'Certificado não informado'}</strong> - {cert.emissor || 'Emissor não informado'} ({cert.anoCertificado || 'Ano não informado'})
            {cert.imagemCertificado && (
              <figure style={{ marginTop: '0.5rem' }}>
                <img
                  src={typeof cert.imagemCertificado === 'string' ? cert.imagemCertificado : URL.createObjectURL(cert.imagemCertificado)}
                  alt={`Imagem do certificado ${cert.nomeCertificado}`}
                  style={{ maxWidth: '200px', borderRadius: '6px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}
                />
              </figure>
            )}
          </div>
        ))
      ) : (
        <p>Nenhum certificado adicionado.</p>
      )}

      {/* Habilidades Técnicas */}
      <h3 className="section-title"><FaTools /> Habilidades Técnicas</h3>
      <p>{habilidades || 'Descreva aqui suas habilidades técnicas.'}</p>

      {/* Idiomas */}
      <h3 className="section-title"><FaLanguage /> Idiomas</h3>
      <ul>
        {['ingles', 'espanhol', 'frances'].map((lang) => (
          <li key={lang}>
            <strong>{idiomaLabels[lang]}</strong>: {idiomas && idiomas[lang] ? idiomas[lang] : 'Nenhum'}
          </li>
        ))}
        {idiomas && idiomas.outrosIdiomas && idiomas.outrosIdiomas.length > 0 && idiomas.outrosIdiomas.map((outro, i) => (
          <li key={`outro-${i}`}>
            <strong>{outro.nome || 'Idioma não informado'}</strong>: {outro.nivel || 'Nenhum'}
          </li>
        ))}
      </ul>

      {/* Conhecimentos */}
      <h3 className="section-title"><FaTools /> Conhecimentos</h3>
      <p>
        Pacote Office: {conhecimentos?.pacoteOffice || 'Nenhum'}
      </p>
      <p>
        Outros: {conhecimentos?.outros || 'Nenhum'}
      </p>
    </div>
  );
}

export default ResumePreview;
