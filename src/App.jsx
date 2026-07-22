import { useState } from "react";
import "./App.css";

function App() {
  const [jobDescription, setJobDescription] = useState("");
  const [resumeFile, setResumeFile] = useState(null);

  const handleAnalyze = () => {
    console.log("Resume:", resumeFile);
    console.log("Job Description:", jobDescription);
  };

  return (
    <div className="container">
      <h1>AI Resume Analyzer</h1>

      <div className="card">
        <label>Upload Resume (PDF)</label>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setResumeFile(e.target.files[0])}
        />

        {resumeFile && (
          <p className="filename">
            Selected File: {resumeFile.name}
          </p>
        )}
      </div>

      <div className="card">
        <label>Paste Job Description</label>

        <textarea
          rows="10"
          placeholder="Paste the job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>

      <button onClick={handleAnalyze}>
        Analyze Resume
      </button>
    </div>
  );
}

export default App;