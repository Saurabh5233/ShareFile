import React from "react";
import { useState } from "react";

const FileUpload = ()=>{
    const [file, setFile] = useState(null);

    const handleDrop = (e)=>{
        e.prevventDefault();
        setFile(e.dataTransfer.files[0]);
    };

    const handleChange = (e)=>{
        e.preventDefault();
        setFile(e.target.files[0]);
    };

    const handleDragOver = (e)=>{
        e.preventdefault();
    };
    
    const handleUpload = ()=>{
        alert("file uploaded....");
    };

    return (
        <div className="mt-5 w-full max-w-md mx-auto">
            <div 
                className="border-dashed border-2 border-blue-500 rounded-lg p-6 text-center cursor-pointer bg-blue-50 hover:bg-blue-100"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
            >
                <p className = "text-gray-500">Drag & Drop your file here</p>
                <input type="file" className="hidden" id="fileInput" onChange={handleChange} />
                or
                <label htmlFor="fileInput" className="text-blue-600 underline cursor-pointer">
                 <button className="m-2 p-1 border-black bg-blue-300 rounded-full ">Browse</button>
                </label>
            </div>
            {file && (
                <div className="mt-4 text-sm text-gray700">
                    <p><strong>Selected:</strong> {file.name}</p>
                </div>
            )}

            <button
            onClick={handleUpload}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
                Upload File
            </button>

        </div>
    )
}

export default FileUpload;