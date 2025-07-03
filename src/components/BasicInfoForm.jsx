// src/components/BasicInfoForm.jsx
import React from 'react';

function BasicInfoForm() {
  return (
    <section>
      <h2>Informações Básicas</h2>
      <form className="form-section">
        <label>
          Nome Completo:
          <input type="text" name="nome" />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" />
        </label>
        <label>
          Telefone:
          <input type="tel" name="telefone" />
        </label>
        <label>
          LinkedIn:
          <input type="url" name="linkedin" />
        </label>
      </form>
    </section>
  );
}

export default BasicInfoForm;
