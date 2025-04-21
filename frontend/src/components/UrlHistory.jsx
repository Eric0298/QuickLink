import React, { useState } from 'react';
import { Card, Table, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Trash3 } from 'react-bootstrap-icons';

const UrlHistory = () => {
  const [urls, setUrls] = useState([
    {
      id: 1,
      original: 'https://www.google.com',
      short: 'https://sho.rt/abc123',
      alias: 'abc123',
      createdAt: '2025-04-20',
      visits: 10,
    },
    {
      id: 2,
      original: 'https://www.openai.com',
      short: 'https://sho.rt/openai',
      alias: 'openai',
      createdAt: '2025-04-19',
      visits: 27,
    },
  ]);

  const clearHistory = () => setUrls([]);

  return (
    <Card className="mt-4 shadow-sm border-primary">
      <Card.Header className="d-flex justify-content-between align-items-center bg-primary text-white">
        <span>📜 URL History</span>
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Clear all history</Tooltip>}
        >
          <Button variant="danger" size="sm" onClick={clearHistory}>
            <Trash3 />
          </Button>
        </OverlayTrigger>
      </Card.Header>
      <Card.Body className="p-0">
        {urls.length > 0 ? (
          <Table bordered hover responsive className="mb-0 text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Original URL</th>
                <th>Short URL</th>
                <th>Alias</th>
                <th>Created</th>
                <th>Visits</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url, index) => (
                <tr key={url.id}>
                  <td>{index + 1}</td>
                  <td className="text-truncate" style={{ maxWidth: 200 }}>{url.original}</td>
                  <td>
                    <a href={url.short} target="_blank" rel="noopener noreferrer">
                      {url.short}
                    </a>
                  </td>
                  <td>{url.alias}</td>
                  <td>{url.createdAt}</td>
                  <td>{url.visits}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="p-3 text-center text-muted">No URLs yet</div>
        )}
      </Card.Body>
    </Card>
  );
};

export default UrlHistory;