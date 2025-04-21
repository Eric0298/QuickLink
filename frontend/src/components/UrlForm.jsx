// src/components/UrlForm.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UrlForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [password, setPassword] = useState('');
  const [expiresAt, setExpiresAt] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const urlRegex = /^(https?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!$&'()*+,;=.]+$/;

    if (!originalUrl || !urlRegex.test(originalUrl)) {
      newErrors.originalUrl = 'Introduce una URL válida';
    }
    if (customAlias.length > 20) {
      newErrors.customAlias = 'El alias no puede tener más de 20 caracteres';
    }
    if (password.length > 0 && password.length < 4) {
      newErrors.password = 'La contraseña debe tener al menos 4 caracteres';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log({ originalUrl, customAlias, password, expiresAt });
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 rounded shadow-sm">
      <Form.Group className="mb-3">
        <Form.Label>URL original</Form.Label>
        <Form.Control
          type="url"
          placeholder="https://ejemplo.com"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          isInvalid={!!errors.originalUrl}
        />
        <Form.Control.Feedback type="invalid">
          {errors.originalUrl}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>
          Alias personalizado
          <span className="ms-2 text-muted" title="Opcional: elige tu propio código">🛈</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="ej. mi-alias"
          value={customAlias}
          onChange={(e) => setCustomAlias(e.target.value)}
          isInvalid={!!errors.customAlias}
        />
        <Form.Control.Feedback type="invalid">
          {errors.customAlias}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña (opcional)</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Fecha de expiración</Form.Label>
        <Form.Control
          type="date"
          value={expiresAt}
          onChange={(e) => setExpiresAt(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="w-100">
        Acortar URL
      </Button>
    </Form>
  );
};

export default UrlForm;
