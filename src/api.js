import axios from "axios";

const API_BASE = "https://backend-ai-edumate.com";

export const generateLesson = async (topic) => {
    return await axios.post(`${API_BASE}/generate_lesson`, { topic });
};
