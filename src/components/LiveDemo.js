import React, { useState } from "react";
import { generateLesson } from "../api";

const LiveDemo = () => {
    const [topic, setTopic] = useState("");
    const [response, setResponse] = useState("");

    const handleGenerate = async () => {
        const res = await generateLesson(topic);
        setResponse(res.data.lesson);
    };

    return (
        <div className="demo">
            <h2>AI-Powered Lesson Generator</h2>
            <input type="text" placeholder="Enter a topic" value={topic} onChange={(e) => setTopic(e.target.value)} />
            <button onClick={handleGenerate}>Generate Lesson</button>
            <p>{response}</p>
        </div>
    );
};

export default LiveDemo;
