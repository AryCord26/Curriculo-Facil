import React, { useState, useEffect } from 'react';

function BasicInfoForm({ formData, updateField }) {
  const [errors, setErrors] = useState({});

  // Função de validação simples
  const validate = (name, value) => {
    switch (name) {
      case 'nome':
        if (!value.trim()) return 'Nome é obrigatório.';
        if (value.trim().length < 3) return 'Nome deve ter ao menos 3 caracteres.';
        return '';
      case 'email':
        if (!value.trim()) return 'Email é obrigatório.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Email inválido.';
        return '';
      case 'telefone':
        if (value && value.replace(/\D/g, '').length < 8) return 'Telefone deve ter ao menos 8 dígitos.';
        return '';
      case 'dataNascimento':
        if (value) {
          const date = new Date(value);
          if (isNaN(date.getTime())) return 'Data inválida.';
          if (date > new Date()) return 'Data não pode ser no futuro.';
        }
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    updateField(name, fieldValue);

    const errorMsg = validate(name, fieldValue);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  useEffect(() => {
    const newErrors = {};
    ['nome', 'email', 'telefone', 'dataNascimento'].forEach(field => {
      newErrors[field] = validate(field, formData[field]);
    });
    setErrors(newErrors);
  }, [formData]);

  return (
    <section aria-labelledby="basic-info-title">
      <h2 id="basic-info-title">Informações Básicas</h2>
      <form className="form-section" noValidate>
        <label htmlFor="nome">
          Nome Completo:
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            aria-describedby="nome-error"
            aria-invalid={!!errors.nome}
            aria-required="true"
          />
        </label>
        {errors.nome && (
          <small
            id="nome-error"
            style={{ color: 'red' }}
            role="alert"
            aria-live="assertive"
          >
            {errors.nome}
          </small>
        )}

        <label htmlFor="email">
          E-mail:
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby="email-error"
            aria-invalid={!!errors.email}
            aria-required="true"
          />
        </label>
        {errors.email && (
          <small
            id="email-error"
            style={{ color: 'red' }}
            role="alert"
            aria-live="assertive"
          >
            {errors.email}
          </small>
        )}

        <label htmlFor="telefone">
          Telefone:
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            aria-describedby="telefone-error"
            aria-invalid={!!errors.telefone}
          />
        </label>
        {errors.telefone && (
          <small
            id="telefone-error"
            style={{ color: 'red' }}
            role="alert"
            aria-live="assertive"
          >
            {errors.telefone}
          </small>
        )}

        <label htmlFor="linkedin">
          LinkedIn:
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/seu-perfil"
          />
        </label>

        <label htmlFor="dataNascimento">
          Data de Nascimento:
          <input
            type="date"
            id="dataNascimento"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            aria-describedby="dataNascimento-error"
            aria-invalid={!!errors.dataNascimento}
          />
        </label>
        {errors.dataNascimento && (
          <small
            id="dataNascimento-error"
            style={{ color: 'red' }}
            role="alert"
            aria-live="assertive"
          >
            {errors.dataNascimento}
          </small>
        )}

        <fieldset>
          <legend>Disponibilidade</legend>
          <div>
            <input
              type="checkbox"
              id="disponibilidadeMudanca"
              name="disponibilidadeMudanca"
              checked={formData.disponibilidadeMudanca || false}
              onChange={handleChange}
            />
            <label htmlFor="disponibilidadeMudanca">Disponível para mudanças</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="disponibilidadeViagem"
              name="disponibilidadeViagem"
              checked={formData.disponibilidadeViagem || false}
              onChange={handleChange}
            />
            <label htmlFor="disponibilidadeViagem">Disponível para viagens</label>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default BasicInfoForm;
