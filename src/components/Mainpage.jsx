import React, { useState } from "react";
import './main.css';
import assets from '../assets/assets';
import main from '../gemini/gemini';
import {useAppContext} from "../context/Context";
import ReactMarkdown from "react-markdown";

export default function Mainpage() {
    const { recentprompt, 
        setRecentPrompt, 
        response, 
        setResponse,
        input, 
        setInput, 
        isLoading, 
        iserror, 
        setIsLoading, 
        setIsError, 
        handleSend, 
        previousresponses, 
        showresults, 
        setShowResults } = useAppContext();

    console.log("Response of Mainpage:", recentprompt);
    return (
        <>
            <div className="main">
                <div className="nav-icon">
                    <img src={assets.gemini_icon} alt="Gemini Icon" className="geminiicon" />
                    <img src={assets.user_icon} alt="User Icon" className="usericon" />
                </div>

                <div className="main-content">
                    <div className="hello">
                        <h1>Welcome to Gemini</h1>
                        <p>How can I help you today?</p>
                    </div>
                    {showresults ? (
                        <div className="response-section">
                            {isLoading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <div className="response">
                                    <p>{recentprompt}</p>
                                    <ReactMarkdown>{response}</ReactMarkdown>
                                </div>
                            )}
                        </div>
                    ) : (
                            <div className="cards">
                                <div className="card">
                                    <p>Discover the capabilities of Gemini and how it can assist you.</p>
                                    <img src={assets.compass_icon} alt="Explore Icon" />
                                </div>
                                <div className="card">
                                    <p>Discover the capabilities of Gemini and how it can assist you.</p>
                                    <img src={assets.bulb_icon} alt="Explore Icon" />
                                </div>
                                <div className="card">
                                    <p>Discover the capabilities of Gemini and how it can assist you.</p>
                                    <img src={assets.message_icon} alt="Explore Icon" />
                                </div>
                                <div className="card">
                                    <p>Discover the capabilities of Gemini and how it can assist you.</p>
                                    <img src={assets.code_icon} alt="Explore Icon" />
                                </div>
                            </div>
                    )}
                    
                </div>

                <div className="main-bottom">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Type your message here..." className="input-field" />
                    <img src={assets.gallery_icon} alt="Attach Icon" className="attach-icon" />
                    <img src={assets.mic_icon} alt="Mic Icon" className="mic-icon" />
                    <button className="send-button" onClick={() => handleSend()}>
                        <img src={assets.send_icon} alt="Send Icon" />
                    </button>
                </div>


            </div>
        </>
    )
}
