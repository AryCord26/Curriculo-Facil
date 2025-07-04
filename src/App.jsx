import React, { useState, useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import './styles/App.css';

import BasicInfoForm from './components/BasicInfoForm';
import ObjectiveForm from './components/ObjectiveForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import CoursesForm from './components/CoursesForm';
import CertificatesForm from './components/CertificatesForm';
import SkillsForm from './components/SkillsForm';
import LanguagesForm from './components/LanguagesForm';
import KnowledgeForm from './components/KnowledgeForm';

import SettingsPanel from './components/SettingsPanel';
import ResumePreview from './components/ResumePreview';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    linkedin: '',
    dataNascimento: '',
    disponibilidadeMudanca: false,
    disponibilidadeViagem: false,
    objetivo: '',

    formacoes: [{ curso: '', instituicao: '', anoConclusao: '' }],
    experienciasProfissionais: [{ empresa: '', cargo: '', periodo: '', descricao: '' }],
    cursos: [{ nome: '', instituicao: '', ano: '', imagem: null }],
    certificados: [{ nome: '', emissor: '', ano: '', imagem: null }],
    habilidades: '',

    idiomas: {
      ingles: 'Nenhum',
      espanhol: 'Nenhum',
      frances: 'Nenhum',
      outrosIdiomas: [],
    },

    conhecimentos: {
      pacoteOffice: 'Nenhum',
      outros: '',
    },
  });

  // Personalização visual
  const [color, setColor] = useState('#4a90e2');
  const [font, setFont] = useState("'Segoe UI', Tahoma, Geneva, Verdana, sans-serif");
  const [theme, setTheme] = useState('light');

  // Ref para capturar o preview para o PDF
  const resumeRef = useRef();

  useEffect(() => {
    document.documentElement.style.setProperty('--cor-principal', color);
    document.documentElement.style.setProperty('--fonte-principal', font);

    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [color, font, theme]);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const setCursos = (cursos) => {
    setFormData(prev => ({ ...prev, cursos }));
  };

  const setCertificados = (certificados) => {
    setFormData(prev => ({ ...prev, certificados }));
  };

  // Função para gerar PDF
  const handleDownloadPDF = () => {
    const input = resumeRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${formData.nome || 'curriculo'}.pdf`);
    });
  };

  return (
    <div className={`app-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <h1>Crie seu currículo</h1>

      <SettingsPanel
        color={color}
        setColor={setColor}
        font={font}
        setFont={setFont}
        theme={theme}
        setTheme={setTheme}
      />

      <BasicInfoForm formData={formData} updateField={updateField} />
      <ObjectiveForm formData={formData} updateField={updateField} />

      <EducationForm
        formacoes={formData.formacoes}
        setFormacoes={(novasFormacoes) => setFormData(prev => ({ ...prev, formacoes: novasFormacoes }))}
      />

      <ExperienceForm
        experienciasProfissionais={formData.experienciasProfissionais}
        setExperienciasProfissionais={(novasExperiencias) => setFormData(prev => ({ ...prev, experienciasProfissionais: novasExperiencias }))}
      />

      <CoursesForm cursos={formData.cursos} setCursos={setCursos} />
      <CertificatesForm certificados={formData.certificados} setCertificados={setCertificados} />

      <SkillsForm formData={formData} updateField={updateField} />
      <LanguagesForm formData={formData} setFormData={setFormData} />
      <KnowledgeForm formData={formData} setFormData={setFormData} />

      <button onClick={handleDownloadPDF} style={{ marginTop: '1rem' }}>
        Baixar Currículo (PDF)
      </button>

      <div ref={resumeRef}>
        <ResumePreview data={formData} />
      </div>
    </div>
  );
}

export default App;
