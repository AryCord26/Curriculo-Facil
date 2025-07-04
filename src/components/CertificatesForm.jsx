import React, { useState, useEffect } from 'react';

function CertificatesForm({ certificados, setCertificados }) {
  // Inicializa o estado local com os dados do pai ou um array vazio
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
    setCertificates([...certificates, { nomeCertificado: '', emissor: '', anoCertificado: '', imagemCertificado: null }]);
  };

  const handleRemove = (index) => {
    const newCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(newCertificates);
  };

  const handleFileChange = (index, file) => {
    const newCertificates = [...certificates];
    newCertificates[index].imagemCertificado = file ? URL.createObjectURL(file) : null;
    setCertificates(newCertificates);
  };

  return (
    <section>
      <h2>Certificados</h2>
      {certificates.length === 0 && <p>Nenhum certificado adicionado.</p>}
      {certificates.map((cert, i) => (
        <form key={i} className="form-section" onSubmit={e => e.preventDefault()}>
          <label>
            Nome do Certificado:
            <input
              type="text"
              value={cert.nomeCertificado}
              onChange={e => handleChange(i, 'nomeCertificado', e.target.value)}
            />
          </label>
          <label>
            Emitido por:
            <input
              type="text"
              value={cert.emissor}
              onChange={e => handleChange(i, 'emissor', e.target.value)}
            />
          </label>
          <label>
            Ano:
            <input
              type="text"
              value={cert.anoCertificado}
              onChange={e => handleChange(i, 'anoCertificado', e.target.value)}
            />
          </label>
          <label>
            Upload do Certificado:
            <input
              type="file"
              accept="image/*"
              onChange={e => handleFileChange(i, e.target.files[0])}
            />
          </label>

          <button type="button" onClick={() => handleRemove(i)}>
            Remover Certificado
          </button>
        </form>
      ))}

      <button type="button" onClick={handleAdd}>
        Adicionar Certificado
      </button>
    </section>
  );
}

export default CertificatesForm;
