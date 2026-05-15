import React, { useContext, useState } from "react";
import main from '../gemini/gemini';
import { createContext } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
  
    const [recentprompt, setRecentPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [previousresponses, setPreviousresponses] = useState([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [iserror, setIsError] = useState(false);
    const [showresults, setShowResults] = useState(false);

    

    async function typingEffect(text) {

        let currentText = "";

        for (let i = 0; i < text.length; i++) {

            currentText += text[i];

            setResponse(currentText);

            await new Promise((resolve) =>
                setTimeout(resolve, 20)
            );
        }
    }


    async function handleSend(prompt) {
        console.log(`Current prompt value: ${prompt} and type of prompt: ${typeof(prompt)}`);
        console.log(`Current input value: ${input} and type of input: ${typeof(input)}`);

        const finalPrompt = prompt || input;
        console.log(`Current final prompt value: ${finalPrompt} and type of final prompt: ${typeof(finalPrompt)}`);
        if (!finalPrompt.trim()) return;
        
        try {
            setIsLoading(true);
            setShowResults(true);
            setRecentPrompt(finalPrompt);
            
            const res = await main(finalPrompt);
            setResponse("");


            await typingEffect(res);

            setPreviousresponses((prev) => {
                if(!prev.includes(finalPrompt)) {
                    return [...prev, finalPrompt];
                }
                return prev;
            });

            setInput("");

        } catch (error) {
            setIsError(true);
            console.error("Error fetching response:", error);

        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div>
        <AppContext.Provider value={{ response, setResponse, recentprompt, setRecentPrompt, input, setInput, isLoading, iserror, setIsLoading, setIsError, handleSend, previousresponses, showresults, setShowResults }}>
            {children}
        </AppContext.Provider>
    </div>
  )
}

export const useAppContext = () => {
    const contextapi = useContext(AppContext);
    if (!contextapi) {
        throw new Error("useAppContext must be used within an AppContext.Provider");
    }
    return contextapi;
};

export default Context;