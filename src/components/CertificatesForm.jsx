import React, { useState, useEffect } from 'react';

function CertificatesForm({ certificados, setCertificados }) {
  const [certificates, setCertificates] = useState(certificados || []);

  useEffect(() => {
    setCertificados(certificates);
  }, [certificates, setCertificados]);

  const handleChange = (index, field, value) => {
    const newCertificates = [...certificates];
    newCertificates[index][field] = value;
    setCertificates(newCertificates);
  };

  const handleAdd = () => {
    setCertificates([
      ...certificates,
      { nome: '', emissor: '', ano: '', imagem: null, preview: null }
    ]);
  };

  const handleRemove = (index) => {
    const newCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(newCertificates);
  };

  const handleFileChange = (index, file) => {
    const newCertificates = [...certificates];
    newCertificates[index].imagem = file || null;
    newCertificates[index].preview = file ? URL.createObjectURL(file) : null;
    setCertificates(newCertificates);
  };

  return (
    <section>
      <h2>Certificados</h2>
      {certificates.length === 0 && <p>Nenhum certificado adicionado.</p>}
      {certificates.map((cert, i) => {
        const nomeId = `nome-certificado-${i}`;
        const emissorId = `emissor-certificado-${i}`;
        const anoId = `ano-certificado-${i}`;
        const fileId = `file-certificado-${i}`;

        return (
          <fieldset key={i} style={{ marginBottom: '1.5rem', padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}>
            <legend>Certificado #{i + 1}</legend>

            <label htmlFor={nomeId}>
              Nome do Certificado:
              <input
                type="text"
                id={nomeId}
                value={cert.nome}
                onChange={e => handleChange(i, 'nome', e.target.value)}
              />
            </label>

            <label htmlFor={emissorId}>
              Emitido por:
              <input
                type="text"
                id={emissorId}
                value={cert.emissor}
                onChange={e => handleChange(i, 'emissor', e.target.value)}
              />
            </label>

            <label htmlFor={anoId}>
              Ano:
              <input
                type="text"
                id={anoId}
                value={cert.ano}
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

            {cert.preview && (
              <img
                src={cert.preview}
                alt={`Preview do certificado ${cert.nome || i + 1}`}
                style={{ maxWidth: '150px', marginTop: '0.5rem', borderRadius: '6px', boxShadow: '0 0 6px rgba(0,0,0,0.1)' }}
              />
            )}

            <button
              type="button"
              onClick={() => handleRemove(i)}
              style={{ marginTop: '0.7rem', backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '0.5rem 1rem', borderRadius: '6px', cursor: 'pointer' }}
            >
              Remover Certificado
            </button>
          </fieldset>
        );
      })}

      <button
        type="button"
        onClick={handleAdd}
        style={{ backgroundColor: '#4a90e2', color: 'white', border: 'none', padding: '0.7rem 1.5rem', borderRadius: '8px', cursor: 'pointer' }}
      >
        Adicionar Certificado
      </button>
    </section>
  );
}

export default CertificatesForm;
