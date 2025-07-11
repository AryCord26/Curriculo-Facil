import React from 'react';

function KnowledgeForm({ formData, setFormData }) {
  const conhecimentos = formData.conhecimentos || {
    pacoteOffice: 'Nenhum',
    outros: '',
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      conhecimentos: {
        ...prev.conhecimentos,
        [name]: value,
      },
    }));
  };

  const options = ['Nenhum', 'Básico', 'Intermediário', 'Avançado', 'Fluente'];

  return (
    <section>
      <h2>Conhecimentos</h2>

      <label htmlFor="pacoteOffice">
        Pacote Office:
        <select
          id="pacoteOffice"
          name="pacoteOffice"
          value={conhecimentos.pacoteOffice}
          onChange={handleChange}
        >
          {options.map(opt => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="outros">
        Outros Softwares / Conhecimentos:
        <textarea
          id="outros"
          name="outros"
          value={conhecimentos.outros}
          onChange={handleChange}
          placeholder="Ex: Photoshop, Canva, Excel Avançado, SAP, ferramentas de BI..."
          rows={3}
        />
      </label>
    </section>
  );
}

export default KnowledgeForm;
