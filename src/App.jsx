// src/App.jsx
import React, { useState, useEffect } from 'react';
import './styles/App.css';

import BasicInfoForm from './components/BasicInfoForm';
import ObjectiveForm from './components/ObjectiveForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import CoursesForm from './components/CoursesForm';
import CertificatesForm from './components/CertificatesForm';
import SkillsForm from './components/SkillsForm';
import LanguagesForm from './components/LanguagesForm';

import SettingsPanel from './components/SettingsPanel';
import ResumePreview from './components/ResumePreview';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    linkedin: '',
    objetivo: '',

    formacoes: [{ curso: '', instituicao: '', anoConclusao: '' }],
    experienciasProfissionais: [{ empresa: '', cargo: '', periodo: '', descricao: '' }],
    experienciasAcademicas: [{ atividade: '', instituicao: '', descricao: '' }],
    cursos: [{ nomeCurso: '', instituicaoCurso: '', anoCurso: '' }],
    certificados: [{ nomeCertificado: '', emissor: '', anoCertificado: '' }],
    habilidades: '',
    idiomas: {
      ingles: 'Nenhum',
      espanhol: 'Nenhum',
      frances: 'Nenhum',
      outros: 'Nenhum',
      pacoteOffice: 'Nenhum',
      outrosSoftwares: '',
    },
  });

  // Personalização visual
  const [color, setColor] = useState('#4a90e2'); // cor principal
  const [font, setFont] = useState("'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"); // fonte
  const [theme, setTheme] = useState('light'); // light ou dark

  // Atualiza variáveis CSS e classe body quando mudar cor, fonte ou tema
  useEffect(() => {
    document.documentElement.style.setProperty('--cor-principal', color);
    document.documentElement.style.setProperty('--fonte-principal', font);

    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [color, font, theme]);

  // Função genérica para atualizar campos simples
  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="app-container">
      <h1>Crie seu primeiro currículo</h1>

      <SettingsPanel
        color={color}
        setColor={setColor}
        font={font}
        setFont={setFont}
        theme={theme}
        setTheme={setTheme}
      />

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
