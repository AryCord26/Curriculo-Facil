// src/components/ResumePreview.jsx
import React from 'react';

function ResumePreview({ data }) {
  const { nome, email, telefone, linkedin, objetivo } = data;

  return (
    <div className="resume-preview" style={{ background: '#fff', padding: '1rem', marginTop: '2rem', borderRadius: '6px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <h2>{nome || 'Seu Nome Aqui'}</h2>
      <p>
        Email: {email || 'email@exemplo.com'} | Tel: {telefone || '(xx) xxxxx-xxxx'} | LinkedIn: {linkedin || 'linkedin.com/in/seu-nome'}
      </p>

      {objetivo && (
        <>
          <h3>Objetivo</h3>
          <p>{objetivo}</p>
        </>
      )}
    </div>
  );
}

export default ResumePreview;
