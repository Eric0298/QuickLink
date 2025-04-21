// src/components/ShortendUrl.jsx
import React, { useState } from 'react';
import { Card, Button, Toast } from 'react-bootstrap';
import { Copy } from 'lucide-react';

const ShortendUrl = ({ shortUrl }) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      <Card className="mt-4 shadow-sm border-0">
        <Card.Body className="d-flex flex-column align-items-center text-center rounded-3 p-4">
          <h5 className="text-success mb-3">¡URL acortada con éxito! 🎉</h5>
          <div className="d-flex align-items-center gap-3">
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="fw-bold text-primary">
              {shortUrl}
            </a>
            <Button variant="outline-primary" onClick={handleCopy} title="Copiar al portapapeles">
              <Copy size={18} />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={2000}
        autohide
        className="position-fixed top-0 end-0 m-4"
        bg="success"
      >
        <Toast.Header closeButton>
          <strong className="me-auto">Copiado</strong>
        </Toast.Header>
        <Toast.Body className="text-white">¡Enlace copiado al portapapeles! ✅</Toast.Body>
      </Toast>
    </>
  );
};

export default ShortendUrl;
