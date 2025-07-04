import React from 'react';
import {
  FaUser, FaEnvelope, FaPhone, FaLinkedin,
  FaBriefcase, FaGraduationCap, FaBook,
  FaCertificate, FaTools, FaLanguage
} from 'react-icons/fa';

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

  // Idiomas válidos (exclui 'Nenhum' e vazios)
  const idiomasValidos = [];

  ['inglês', 'espanhol', 'frances'].forEach((lang) => {
    if (idiomas && idiomas[lang] && idiomas[lang] !== 'Nenhum') {
      idiomasValidos.push({ nome: idiomaLabels[lang], nivel: idiomas[lang] });
    }
  });

  if (idiomas && idiomas.outrosIdiomas && idiomas.outrosIdiomas.length > 0) {
    idiomas.outrosIdiomas.forEach((outro) => {
      if (outro.nivel && outro.nivel !== 'Nenhum' && outro.nome && outro.nome.trim() !== '') {
        idiomasValidos.push({ nome: outro.nome, nivel: outro.nivel });
      }
    });
  }

  // Verifica se mostra conhecimentos
  const mostrarConhecimentos = conhecimentos &&
    (
      (conhecimentos.pacoteOffice && conhecimentos.pacoteOffice !== 'Nenhum') ||
      (conhecimentos.outros && conhecimentos.outros.trim() !== '')
    );

  // Verifica se mostra habilidades técnicas (não vazio e diferente de 'Nenhum' se quiser)
  const mostrarHabilidades = habilidades && habilidades.trim() !== '' && habilidades.trim().toLowerCase() !== 'nenhum';

  // Verifica se existe pelo menos um item válido em cada lista
  const temFormacoesValidas = formacoes && formacoes.some(f =>
    (f.curso && f.curso.trim() !== '') ||
    (f.instituicao && f.instituicao.trim() !== '') ||
    (f.anoConclusao && f.anoConclusao.trim() !== '')
  );

  const temExperienciasValidas = experienciasProfissionais && experienciasProfissionais.some(exp =>
    (exp.cargo && exp.cargo.trim() !== '') ||
    (exp.empresa && exp.empresa.trim() !== '') ||
    (exp.periodo && exp.periodo.trim() !== '') ||
    (exp.descricao && exp.descricao.trim() !== '')
  );

  const temCursosValidos = cursos && cursos.some(curso =>
    (curso.nome && curso.nome.trim() !== '') ||
    (curso.instituicao && curso.instituicao.trim() !== '') ||
    (curso.ano && curso.ano.trim() !== '') ||
    curso.imagem
  );

  const temCertificadosValidos = certificados && certificados.some(cert =>
    (cert.nome && cert.nome.trim() !== '') ||
    (cert.emissor && cert.emissor.trim() !== '') ||
    (cert.ano && cert.ano.trim() !== '') ||
    cert.imagem
  );

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
      {objetivo && objetivo.trim() !== '' && (
        <>
          <h3 className="section-title"><FaBook /> Objetivo</h3>
          <p>{objetivo}</p>
        </>
      )}

      {/* Formação */}
      {temFormacoesValidas && (
        <>
          <h3 className="section-title"><FaGraduationCap /> Formação</h3>
          <ul>
            {formacoes.map((f, i) => (
              (f.curso?.trim() || f.instituicao?.trim() || f.anoConclusao?.trim()) && (
                <li key={i}>
                  <strong>{f.curso || 'Curso não informado'}</strong> - {f.instituicao || 'Instituição não informada'} ({f.anoConclusao || 'Ano não informado'})
                </li>
              )
            ))}
          </ul>
        </>
      )}

      {/* Experiência Profissional */}
      {temExperienciasValidas && (
        <>
          <h3 className="section-title"><FaBriefcase /> Experiência Profissional</h3>
          {experienciasProfissionais.map((exp, i) => (
            (exp.cargo?.trim() || exp.empresa?.trim() || exp.periodo?.trim() || exp.descricao?.trim()) && (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <strong>{exp.cargo || 'Cargo não informado'}</strong> - {exp.empresa || 'Empresa não informada'} ({exp.periodo || 'Período não informado'})
                <p>{exp.descricao || 'Descrição não informada'}</p>
              </div>
            )
          ))}
        </>
      )}

      {/* Cursos */}
      {temCursosValidos && (
        <>
          <h3 className="section-title"><FaBook /> Cursos</h3>
          {cursos.map((curso, i) => (
            (curso.nome?.trim() || curso.instituicao?.trim() || curso.ano?.trim() || curso.imagem) && (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <strong>{curso.nome || 'Curso não informado'}</strong> - {curso.instituicao || 'Instituição não informada'} ({curso.ano || 'Ano não informado'})
                {curso.imagem && (
                  <figure style={{ marginTop: '0.5rem' }}>
                    <img
                      src={typeof curso.imagem === 'string' ? curso.imagem : URL.createObjectURL(curso.imagem)}
                      alt={`Certificado do curso ${curso.nome}`}
                      style={{ maxWidth: '200px', borderRadius: '6px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}
                    />
                  </figure>
                )}
              </div>
            )
          ))}
        </>
      )}

      {/* Certificados */}
      {temCertificadosValidos && (
        <>
          <h3 className="section-title"><FaCertificate /> Certificados</h3>
          {certificados.map((cert, i) => (
            (cert.nome?.trim() || cert.emissor?.trim() || cert.ano?.trim() || cert.imagem) && (
              <div key={i} style={{ marginBottom: '1rem' }}>
                <strong>{cert.nome || 'Certificado não informado'}</strong> - {cert.emissor || 'Emissor não informado'} ({cert.ano || 'Ano não informado'})
                {cert.imagem && (
                  <figure style={{ marginTop: '0.5rem' }}>
                    <img
                      src={typeof cert.imagem === 'string' ? cert.imagem : URL.createObjectURL(cert.imagem)}
                      alt={`Imagem do certificado ${cert.nome}`}
                      style={{ maxWidth: '200px', borderRadius: '6px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}
                    />
                  </figure>
                )}
              </div>
            )
          ))}
        </>
      )}

      {/* Habilidades Técnicas */}
      {mostrarHabilidades && (
        <>
          <h3 className="section-title"><FaTools /> Habilidades Técnicas</h3>
          <p>{habilidades}</p>
        </>
      )}

      {/* Idiomas */}
      {idiomasValidos.length > 0 && (
        <>
          <h3 className="section-title"><FaLanguage /> Idiomas</h3>
          <ul>
            {idiomasValidos.map((idioma, i) => (
              <li key={i}>
                <strong>{idioma.nome}</strong>: {idioma.nivel}
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Conhecimentos */}
      {mostrarConhecimentos && (
        <>
          <h3 className="section-title"><FaTools /> Conhecimentos</h3>
          <p>Pacote Office: {conhecimentos?.pacoteOffice}</p>
          <p>Outros: {conhecimentos?.outros}</p>
        </>
      )}
    </div>
  );
}

export default ResumePreview;
