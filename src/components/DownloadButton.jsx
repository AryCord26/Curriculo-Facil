// src/components/DownloadButton.jsx
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';

function DownloadButton({ resumeRef }) {
  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <ReactToPrint
        trigger={() => <button>Baixar Currículo em PDF</button>}
        content={() => resumeRef.current}
      />
    </div>
  );
}

export default DownloadButton;
