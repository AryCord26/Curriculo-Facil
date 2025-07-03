// src/components/ResumePreview.jsx
import React from 'react';
import './ResumePreview.css';

function ResumePreview() {
  return (
    <div id="resume" className="resume-preview">
      <h2>João da Silva</h2>
      <p>Email: joao@email.com | Tel: (11) 99999-9999 | LinkedIn: linkedin.com/in/joao</p>

      <h3>Objetivo</h3>
      <p>Conseguir minha primeira oportunidade na área de tecnologia, com foco em front-end.</p>

      <h3>Formação Acadêmica</h3>
      <p><strong>Curso:</strong> Web Design - FIAP (Conclusão: 2026)</p>

      <h3>Experiência Profissional</h3>
      <p><strong>Analista Júnior - Empresa X</strong> (2023 - Atual)<br />
      Atendimento N1/N2 e suporte à infraestrutura de TI.</p>

      <h3>Experiência Acadêmica</h3>
      <p>Projeto integrador - Desenvolvimento de site em React com backend em Node.js</p>

      <h3>Cursos</h3>
      <ul>
        <li>Formação em React - Alura (2024)</li>
        <li>HTML e CSS - Senai (2023)</li>
      </ul>

      <h3>Certificados</h3>
      <ul>
        <li>Cybersecurity Essentials - Cisco (2024)</li>
      </ul>

      <h3>Habilidades Técnicas</h3>
      <p>React, HTML, CSS, JavaScript, Figma</p>

      <h3>Idiomas e Conhecimentos</h3>
      <ul>
        <li>Inglês: Intermediário</li>
        <li>Espanhol: Básico</li>
        <li>Pacote Office: Avançado</li>
      </ul>
    </div>
  );
}

export default ResumePreview;
