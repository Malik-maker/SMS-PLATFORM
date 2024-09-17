import React, { useState } from "react";
import { FaTrash, FaCopy } from "react-icons/fa";
import "./AdminDashboard.css"; // Import the CSS file

const API = () => {
  const [apiKeys, setApiKeys] = useState([]);
  const [copiedKey, setCopiedKey] = useState(""); // Track which item is copied

  // Function to generate a random API Key and Secret
  const generateApiKey = () => {
    const apiKey = `API-${Math.random().toString(36).substr(2, 10)}`;
    const apiSecret = `SECRET-${Math.random().toString(36).substr(2, 10)}`;
    const newKey = {
      key: apiKey,
      secret: apiSecret,
      dateCreated: new Date().toLocaleDateString(),
    };
    setApiKeys([...apiKeys, newKey]);
  };

  // Function to copy text to clipboard
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(type); // Indicate what was copied
    setTimeout(() => setCopiedKey(""), 2000); // Clear copied status after 2 seconds
  };

  // Function to delete an API key
  const deleteApiKey = (index) => {
    setApiKeys(apiKeys.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Generate API Key</h3>

      {/* Generate API Key Button */}
      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={generateApiKey}>
          Generate API Key
        </button>
      </div>

      {/* Table to display generated API keys */}
      <div className="table-responsive">
        <table className="table table-bordered shadow">
          <thead className="thead-light">
            <tr>
              <th scope="col">API Key</th>
              <th scope="col">API Secret</th>
              <th scope="col">Date Created</th>
              <th scope="col" className="text-end">Action</th> {/* Align to right */}
            </tr>
          </thead>
          <tbody>
            {apiKeys.length > 0 ? (
              apiKeys.map((api, index) => (
                <tr key={index}>
                  <td>
                    {api.key}{" "}
                    <FaCopy
                      className="copy-icon"
                      onClick={() => copyToClipboard(api.key, `key-${index}`)}
                      style={{ cursor: "pointer", marginLeft: "10px" }}
                    />
                    {copiedKey === `key-${index}` && (
                      <span className="text-success ml-2">Copied!</span>
                    )}
                  </td>
                  <td>
                    {api.secret}{" "}
                    <FaCopy
                      className="copy-icon"
                      onClick={() => copyToClipboard(api.secret, `secret-${index}`)}
                      style={{ cursor: "pointer", marginLeft: "10px" }}
                    />
                    {copiedKey === `secret-${index}` && (
                      <span className="text-success ml-2">Copied!</span>
                    )}
                  </td>
                  <td>{api.dateCreated}</td>
                  <td className="text-end">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteApiKey(index)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No API keys found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default API;
