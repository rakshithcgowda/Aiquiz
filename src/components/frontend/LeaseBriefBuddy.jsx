import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Lease = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState('');
  const [history, setHistory] = useState([]);

  // call the GET endpoint on mount
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const resp = await axios.get('http://localhost:8000/api/lease-summarization');
        setHistory(resp.data.summaries || []);
      } catch (err) {
        console.error('Could not load history:', err);
      }
    };
    fetchHistory();
  }, []);

  const handleFileUpload = async (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    const formData = new FormData();
    formData.append('file', uploadedFile);

    try {
      const response = await axios.post(
        'http://localhost:8000/api/lease-summarization',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      const newSummary = response.data.summary || 'No summary generated';
      setSummary(newSummary);

      // prepend the new summary to history
      setHistory((h) => [
        {
          id: Date.now(),
          timestamp: new Date().toISOString(),
          pages: 'uploaded pages…',
          summary: newSummary
        },
        ...h
      ]);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setSummary('Failed to generate summary: ' + (error.response?.data?.detail || 'Unknown error'));
    }
  };

  return (
    <div className="container mt-5">
      <h2>LeaseBrief Buddy</h2>

      {/* file uploader */}
      <input type="file" className="form-control mb-3" onChange={handleFileUpload} />
      {file && <div className="alert alert-secondary mb-3">Selected File: {file.name}</div>}

      {/* latest summary */}
      {summary && (
        <div className="alert alert-info mb-4" style={{ whiteSpace: 'pre-wrap' }}>
          <h3>Latest Summary</h3>
          {summary}
        </div>
      )}

      {/* history */}
      {history.length > 0 && (
        <div>
          <h3>Past Summaries</h3>
          <ul className="list-group">
            {history.map((item) => (
              <li key={item.id} className="list-group-item">
                <small className="text-muted">{new Date(item.timestamp).toLocaleString()}</small>
                <p style={{ margin: '0.5rem 0' }}>{item.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Lease;
