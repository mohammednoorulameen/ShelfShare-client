

export const config = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:5050/api",
  // VITE_GOOGLE_CLIENT_ID = 
  backendUrl :  import.meta.env.VITE_BACKEND_URL,
  GEMINI_API : import.meta.env.VITE_GEMINI_API_KEY
};
