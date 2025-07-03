// src/components/CertificatesForm.jsx
import React from 'react';

function CertificatesForm() {
  return (
    <section>
      <h2>Certificados</h2>
      <form className="form-section">
        <label>
          Nome do Certificado:
          <input type="text" name="certificado" />
        </label>
        <label>
          Emitido por:
          <input type="text" name="emissor" />
        </label>
        <label>
          Ano:
          <input type="text" name="anoCertificado" />
        </label>
      </form>
    </section>
  );
}

export default CertificatesForm;
