import React from "react";
import "./Features.css";

const features = [
    { title: "AI Course Generation", desc: "Create courses instantly with AI." },
    { title: "AI-Powered Quizzes", desc: "Adaptive quizzes based on learning." },
    { title: "AI Tutor", desc: "Get answers to all your doubts instantly." }
];

const Features = () => {
    return (
        <section className="features">
            <h2>Why Choose AI-Edumate?</h2>
            <div className="feature-list">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <h3>{feature.title}</h3>
                        <p>{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
