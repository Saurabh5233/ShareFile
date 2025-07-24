import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import PasswordPrompt from "../components/PasswordPrompt";
import Loader from "../components/Loader";

const DownloadPage = ()=>{
    const {id} = useParams();
    const [fileData, setFileDAta] = useState(null);
    const [loading, setLoading] = useState(true);
    const [expired, setExpired] = useState(false);
    const [passwordRequired, setPasswordRequired] = useState(false);
    const [downloadLink, setDownloadLink] = useState("");
    const [error, setError] = useState("");

    useEffect(()=>{
        fetchFileMeta();
    }, []); // syntax for useEffect ... useEffect(callback, dependency array);

    const fetchFileMeta = async () =>{
        try{
            const res = await fetch(``) // left blank to add the url from where to fetch the file......
            const data = await res.json();

            if(!res.ok) throw new Error(data.message || "Something went Wrong");
            if(data.expired){
                setExpired(true);
            }else if(data.passwordProtected){
                setPasswordRequired(true);
            }else {
                setFileDAta(data);
                setDownloadLink(data.downloadUrl);
            }
        } catch (err){
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    const handlePasswordSubmit = async(password)=>{
        try{
            setLoading(true);
            // yet to add the fetch url here......
            const res = await fetch(``, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({password}),
            });

            const data = await res.json();

            if(!res.ok) throw new Error(data.message || "Incorrect Password");

            setFileDAta(data);
            setDownloadLink(data.downloadUrl);
            setPasswordRequired(false);
        }catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    };

    if(loading) return <Loader text = "Loading file..."/>
    if(error) return <p className="text-red-600 text-center mt-10">{error}</p>;
    if(expired) return <p className="text-gray-600 text-center mt-10">This file has expired or been deleted</p>

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10">
            {passwordRequired ?(
                <PasswordPrompt onSubmit={handlePasswordSubmit}/>
            ) : (
                <div>
                    <h1 className="text-xl font-semibold mb-4 text-gray-700">{fileData?.filename}</h1>
                    <p>
                        Size: {(fileData.size/ (1024*1024)).toFixed(2)} MB
                    </p>

                    <a href="{downloadLink}"
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    download
                    >
                        Download
                    </a>
                </div>
            )}

        </div>
    );
};

export default DownloadPage;