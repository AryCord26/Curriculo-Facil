import React from 'react';

function BasicInfoForm({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <section>
      <h2>Informações Básicas</h2>
      <form className="form-section">
        <label>
          Nome Completo:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
        </label>
        <label>
          E-mail:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Telefone:
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
        </label>
        <label>
          LinkedIn:
          <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        </label>
        <label>
          Data de Nascimento:
          <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
        </label>
        <label>
          <input
            type="checkbox"
            name="disponibilidadeMudanca"
            checked={formData.disponibilidadeMudanca || false}
            onChange={handleChange}
          />
          Disponível para mudanças
        </label>
        <label>
          <input
            type="checkbox"
            name="disponibilidadeViagem"
            checked={formData.disponibilidadeViagem || false}
            onChange={handleChange}
          />
          Disponível para viagens
        </label>
      </form>
    </section>
  );
}

export default BasicInfoForm;
