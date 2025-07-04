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
        // Regex simples para email
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

    // Validar o campo na alteração
    const errorMsg = validate(name, fieldValue);
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  // Validar todos os campos quando o formData mudar (ex: se resetar)
  useEffect(() => {
    const newErrors = {};
    ['nome', 'email', 'telefone', 'dataNascimento'].forEach(field => {
      newErrors[field] = validate(field, formData[field]);
    });
    setErrors(newErrors);
  }, [formData]);

  return (
    <section>
      <h2>Informações Básicas</h2>
      <form className="form-section" noValidate>
        <label>
          Nome Completo:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
          {errors.nome && <small style={{color: 'red'}}>{errors.nome}</small>}
        </label>

        <label>
          E-mail:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <small style={{color: 'red'}}>{errors.email}</small>}
        </label>

        <label>
          Telefone:
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} />
          {errors.telefone && <small style={{color: 'red'}}>{errors.telefone}</small>}
        </label>

        <label>
          LinkedIn:
          <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
        </label>

        <label>
          Data de Nascimento:
          <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} />
          {errors.dataNascimento && <small style={{color: 'red'}}>{errors.dataNascimento}</small>}
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
