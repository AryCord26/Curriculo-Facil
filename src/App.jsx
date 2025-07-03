// src/App.jsx
import React, { useState } from 'react';
import './styles/App.css';

import BasicInfoForm from './components/BasicInfoForm';
import ObjectiveForm from './components/ObjectiveForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import CoursesForm from './components/CoursesForm';
import CertificatesForm from './components/CertificatesForm';
import SkillsForm from './components/SkillsForm';
import LanguagesForm from './components/LanguagesForm';

import ResumePreview from './components/ResumePreview';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    linkedin: '',
    objetivo: '',

    // Formação (array para suportar múltiplas formações)
    formacoes: [
      { curso: '', instituicao: '', anoConclusao: '' }
    ],

    // Experiências Profissional e Acadêmica (arrays)
    experienciasProfissionais: [
      { empresa: '', cargo: '', periodo: '', descricao: '' }
    ],
    experienciasAcademicas: [
      { atividade: '', instituicao: '', descricao: '' }
    ],

    cursos: [
      { nomeCurso: '', instituicaoCurso: '', anoCurso: '' }
    ],

    certificados: [
      { nomeCertificado: '', emissor: '', anoCertificado: '' }
    ],

    habilidades: '',

    idiomas: {
      ingles: 'Nenhum',
      espanhol: 'Nenhum',
      frances: 'Nenhum',
      outros: 'Nenhum',
      pacoteOffice: 'Nenhum',
      outrosSoftwares: '',
    }
  });

  // Função genérica para atualizar campos simples
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Para campos mais complexos (arrays e objetos), criaremos funções específicas no componente

  return (
    <div className="app-container">
      <h1>Crie seu primeiro currículo</h1>

      <BasicInfoForm formData={formData} setFormData={setFormData} updateField={updateField} />
      <ObjectiveForm formData={formData} updateField={updateField} />

      <EducationForm formData={formData} setFormData={setFormData} />
      <ExperienceForm formData={formData} setFormData={setFormData} />
      <CoursesForm formData={formData} setFormData={setFormData} />
      <CertificatesForm formData={formData} setFormData={setFormData} />
      <SkillsForm formData={formData} updateField={updateField} />
      <LanguagesForm formData={formData} setFormData={setFormData} />

      <ResumePreview data={formData} />
    </div>
  );
}

export default App;
