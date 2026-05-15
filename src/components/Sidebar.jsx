import React, { useState } from "react";
import './sidebar.css';
import assets from '../assets/assets';
import { useAppContext } from "../context/Context";


const Sidebar = () => {
    const { previousresponses, setShowResults, handleSend, setInput } = useAppContext();
    const [extended, setExtended] = useState(false);
    console.log("Previous responses in Sidebar:", previousresponses);
    return (
        <>
            
            <div className={extended ? "sidebar" : "sidebarextended"}>
                <img className="hamburger" src={assets.menu_icon} alt="Menu" onClick={() => setExtended(!extended)} />
                <h1>React App</h1>
                <h2>Navigation</h2>
                <div className="top">
                    
                    <div className="newchat" onClick={()=> setShowResults(false)}>  
                        <img src={assets.plus_icon} alt="New Chat" />
                        {
                            extended ? <span>New Chat</span> : null
                        }
                    </div>
                    
                    {
                        extended ? 
                        <div className="recent">
                            <p>Recent</p>
                            {
                                previousresponses.length > 0 ? 
                                (
                                    previousresponses.map((item, index) => {
                                        return (
                                            <div key={index} className="recent-item" onClick={() => {
                                                setShowResults(true);
                                                handleSend(item);
                                            }}>
                                                <img src={assets.message_icon} alt="Message" />
                                                <span>{item}</span>
                                            </div>
                                        )          
                                    }
                                )) : <p>No recent chats</p>
                            }        
                        </div> : null
                    }
                    
                </div>

                <div className="bottom">
                    <div className="settings">
                        <img src={assets.setting_icon} alt="Settings" />
                        {
                            extended ? <span>Settings</span> : null
                        }
                    </div>
                    <div className="settings">
                        <img src={assets.history_icon} alt="History" />
                        {
                            extended ? <span>History</span> : null
                        }
                    </div>
                    <div className="help">
                        <img src={assets.question_icon} alt="Help" />
                        {
                            extended ? <span>Help & Feedback</span> : null
                        }
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default Sidebar;
