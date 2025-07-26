const Loader = ({ text = "Uploading..." }) => {
    return (
        <div className="flex items-center justify-center space-x-2">
            <div className="w-5 h-5 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            <span className="text-blue-600 font-medium">{text}</span>
        </div>
    );
};
export default Loader;