import React from 'react';

function CertificatesForm({ certificados, setCertificados }) {
  const handleChange = (index, field, value) => {
    const newCertificates = [...certificados];
    newCertificates[index][field] = value;
    setCertificados(newCertificates);
  };

  const handleAdd = () => {
    setCertificados([...certificados, { nomeCertificado: '', emissor: '', anoCertificado: '', imagemCertificado: null }]);
    setTimeout(() => {
      document.getElementById('certificate-last')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleRemove = (index) => {
    if(window.confirm("Deseja realmente remover este certificado?")){
      const newCertificates = certificados.filter((_, i) => i !== index);
      setCertificados(newCertificates);
    }
  };

  const handleFileChange = (index, file) => {
    const newCertificates = [...certificados];
    newCertificates[index].imagemCertificado = file ? URL.createObjectURL(file) : null;
    setCertificados(newCertificates);
  };

  return (
    <section>
      <h2>Certificados</h2>
      {certificados.length === 0 && <p>Nenhum certificado adicionado.</p>}
      {certificados.map((cert, i) => (
        <div key={i} className="dynamic-item" id={i === certificados.length -1 ? 'certificate-last' : undefined} tabIndex={-1}>
          <h4>Certificado {i + 1}</h4>
          <div className="form-row">
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
          </div>
          <label>
            Upload do Certificado:
            <input
              type="file"
              accept="image/*"
              onChange={e => handleFileChange(i, e.target.files[0])}
            />
          </label>
          {cert.imagemCertificado && <img src={cert.imagemCertificado} alt="Preview do certificado" className="img-preview" />}
          <button
            type="button"
            className="remove-btn"
            aria-label={`Remover certificado ${i + 1}`}
            onClick={() => handleRemove(i)}
          >
            &times;
          </button>
        </div>
      ))}

      <button type="button" className="add-btn" onClick={handleAdd}>
        Adicionar Certificado
      </button>
    </section>
  );
}

export default CertificatesForm;
