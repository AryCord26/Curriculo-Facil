import React, { useState } from 'react';

function CertificatesForm() {
  const [certificates, setCertificates] = useState([
    { nome: '', emissor: '', ano: '', imagem: null },
  ]);

  const handleChange = (index, field, value) => {
    const newCertificates = [...certificates];
    newCertificates[index][field] = value;
    setCertificates(newCertificates);
  };

  const handleAdd = () => {
    setCertificates([...certificates, { nome: '', emissor: '', ano: '', imagem: null }]);
  };

  const handleRemove = (index) => {
    if (certificates.length === 1) return; // Mantém pelo menos um
    const newCertificates = certificates.filter((_, i) => i !== index);
    setCertificates(newCertificates);
  };

  const handleFileChange = (index, file) => {
    const newCertificates = [...certificates];
    newCertificates[index].imagem = file;
    setCertificates(newCertificates);
  };

  return (
    <section>
      <h2>Certificados</h2>
      {certificates.map((cert, i) => (
        <form key={i} className="form-section">
          <label>
            Nome do Certificado:
            <input
              type="text"
              value={cert.nome}
              onChange={e => handleChange(i, 'nome', e.target.value)}
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
              value={cert.ano}
              onChange={e => handleChange(i, 'ano', e.target.value)}
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
