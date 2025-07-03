// src/components/DownloadButton.jsx
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import ResumePreview from './ResumePreview';

function DownloadButton() {
  const componentRef = useRef();

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <ReactToPrint
        trigger={() => <button>Baixar Currículo em PDF</button>}
        content={() => componentRef.current}
      />
      <div style={{ display: 'none' }}>
        <ResumePreview ref={componentRef} />
      </div>
    </div>
  );
}

export default DownloadButton;
