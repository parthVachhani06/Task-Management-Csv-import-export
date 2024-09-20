import React, { useState } from 'react';
import { readString } from 'react-papaparse';

const TaskImport = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target.result;
      const tasks = readString(content, { header: true });
      console.log(tasks);
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Import CSV</button>
    </div>
  );
};

export default TaskImport;
