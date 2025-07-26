import React, { useState } from "react";
import { UploadButton } from "@uploadthing/react";

const FileUpload = () => {
  const [downloadLink, setDownloadLink] = useState(null);

  const handleUploadComplete = async (res) => {
    const file = res[0];
    // Send metadata to backend
    const response = await fetch("http://localhost:5000/api/files/uploadFiles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        originalName: file.name,
        uploadThingUrl: file.url,
        size: file.size,
      }),
    });
    const data = await response.json();
    setDownloadLink(data.downloadLink);
  };

  return (
    <div className="mt-5 w-full max-w-md mx-auto">
      <UploadButton
        endpoint="fileUploader" // Replace with your endpoint name
        onClientUploadComplete={handleUploadComplete}
        onUploadError={(error) => alert(`Upload error: ${error.message}`)}
      />
      {downloadLink && (
        <div className="mt-4 text-sm text-green-700">
          <p>
            Share this link:{" "}
            <a
              href={downloadLink}
              className="underline text-blue-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              {downloadLink}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;