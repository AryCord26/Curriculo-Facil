// src/components/ExperienceForm.jsx
import React from 'react';

function ExperienceForm() {
  return (
    <section>
      <h2>Experiência Profissional</h2>
      <form className="form-section">
        <label>
          Empresa:
          <input type="text" name="empresa" />
        </label>
        <label>
          Cargo:
          <input type="text" name="cargo" />
        </label>
        <label>
          Período:
          <input type="text" name="periodo" placeholder="Ex: Jan 2022 - Dez 2023" />
        </label>
        <label>
          Descrição:
          <textarea name="descricao" rows="3" />
        </label>
      </form>

      <h2>Experiência Acadêmica</h2>
      <form className="form-section">
        <label>
          Projeto / Atividade:
          <input type="text" name="atividade" />
        </label>
        <label>
          Instituição:
          <input type="text" name="instituicaoAcademica" />
        </label>
        <label>
          Descrição:
          <textarea name="descricaoAcademica" rows="3" />
        </label>
      </form>
    </section>
  );
}

export default ExperienceForm;
