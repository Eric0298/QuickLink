import React from 'react';
import { Table, Card } from 'react-bootstrap';

const VisitStats = ({ mostVisited = [], mostRecent = [] }) => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-6 mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-primary text-white fw-bold">Top 5 Most Visited Links</Card.Header>
            <Card.Body>
              <Table responsive bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Short URL</th>
                    <th>Visits</th>
                  </tr>
                </thead>
                <tbody>
                  {mostVisited.length > 0 ? (
                    mostVisited.map((url, index) => (
                      <tr key={url.id || index}>
                        <td>{index + 1}</td>
                        <td>
                          <a href={`/${url.short_code}`} target="_blank" rel="noopener noreferrer">
                            {url.short_code}
                          </a>
                        </td>
                        <td>{url.visit_count}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center text-muted">No data available</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6 mb-4">
          <Card className="shadow-sm">
            <Card.Header className="bg-success text-white fw-bold">Top 5 Most Recent Links</Card.Header>
            <Card.Body>
              <Table responsive bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Short URL</th>
                    <th>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {mostRecent.length > 0 ? (
                    mostRecent.map((url, index) => (
                      <tr key={url.id || index}>
                        <td>{index + 1}</td>
                        <td>
                          <a href={`/${url.short_code}`} target="_blank" rel="noopener noreferrer">
                            {url.short_code}
                          </a>
                        </td>
                        <td>{new Date(url.created_at).toLocaleDateString()}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center text-muted">No data available</td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VisitStats;
