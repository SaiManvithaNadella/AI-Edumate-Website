import React from "react";
import { motion } from "framer-motion";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <motion.section 
            className="hero" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
        >
            <h1>Transform Learning with AI</h1>
            <p>AI-powered learning for students and instructors.</p>
            <button>Get Started</button>
        </motion.section>
    );
};

export default HeroSection;
