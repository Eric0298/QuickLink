// src/components/StatsTable.jsx
import React from 'react';
import { Table, Card } from 'react-bootstrap';

const StatsTable = () => {
  const mostVisited = [
    { id: 1, alias: 'promo2025', visits: 987 },
    { id: 2, alias: 'linkedin-cv', visits: 732 },
    { id: 3, alias: 'short-link', visits: 530 },
    { id: 4, alias: 'blog-post', visits: 412 },
    { id: 5, alias: 'deal', visits: 301 },
  ];

  const recentLinks = [
    { id: 6, alias: 'sale-april', created_at: '2025-04-21' },
    { id: 7, alias: 'portfolio', created_at: '2025-04-20' },
    { id: 8, alias: 'project-demo', created_at: '2025-04-19' },
    { id: 9, alias: 'github', created_at: '2025-04-19' },
    { id: 10, alias: 'bootcamp', created_at: '2025-04-18' },
  ];

  return (
    <div className="container my-5">
      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4">🔥 Top 5 Most Visited Links</h5>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Alias</th>
                <th>Visit Count</th>
              </tr>
            </thead>
            <tbody>
              {mostVisited.map((link, index) => (
                <tr key={link.id}>
                  <td>{index + 1}</td>
                  <td>{link.alias}</td>
                  <td>{link.visits}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <h5 className="mb-4">🕒 Top 5 Most Recent Links</h5>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Alias</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {recentLinks.map((link, index) => (
                <tr key={link.id}>
                  <td>{index + 1}</td>
                  <td>{link.alias}</td>
                  <td>{link.created_at}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default StatsTable;
