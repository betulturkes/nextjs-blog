import React, { useState } from 'react';

export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isFileUploaded, setIsFileUploaded] = useState(false);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) { // Dosya seçilmediyse işlem yapmayın
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('/a/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);
            setIsFileUploaded(true);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <h2>File Upload</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {isFileUploaded && <p>File uploaded successfully!</p>}
        </div>
    );
}
