import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const link = query.get("link");

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="bg-gray-100 p-6 rounded-lg shadow text-center w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">File Uploaded!</h1>
        <p className="text-gray-700 mb-4">Here's your sharable download link:</p>
        <div className="bg-white p-2 rounded border mb-4 break-all">{link}</div>
        <button
          onClick={handleCopy}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
