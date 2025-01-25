import React, { useState } from 'react';

const FileUploadButton = () => {
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <div>
            <input 
                type="file" 
                id="file-input" 
                onChange={handleFileChange} 
                style={{ display: 'none' }}  // Hide the file input
            />
            <label htmlFor="file-input" className="file-upload-button">
                Choose the File
            </label>

            {fileName && <p>Selected File: {fileName}</p>}
        </div>
    );
};

export default FileUploadButton;
