import { useState } from "react";

const PasswordPrompt = ({ onSubmit }) => {
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(password);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6 w-full max-w-sm mx-auto ">
            <h2 className="text-center text-2xl font-semibold text-gray-700 mb-4">Password Required</h2>
            <input
                type="password"
                className="w-full border rounded p-2 mb-4 focus:outline-blue-400"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit" className="w-full bg-blue-600 text-white py-2">
                Submit
            </button>
        </form>
    );
};

export default PasswordPrompt;