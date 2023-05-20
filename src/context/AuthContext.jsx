import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from '../api/axios'

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [isSubmitting, setIsSubmitting]= useState(false);
  const navigate = useNavigate();

  const csrf = () => axios.get("/sanctum/csrf-cookie");
  

  const login = async ({ ...data }) => {
    await csrf();
    setErrors([]);
    setIsSubmitting(true)
    try {
      const response = await axios.post("/auth/token", data);
      if(response.status === 200){
        const userResponse = {
          email: response.data.user.email,
          role: response.data.user.role,
          name: response.data.user.name,
          token: response.data.token,
        };
        setIsSubmitting(false)
        setUser(userResponse);
        localStorage.setItem('user', JSON.stringify(userResponse))
      }
      navigate('/dashboard')
    } catch (e) {
      console.log(e.response)
      setIsSubmitting(false)
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };

  const logout = () => {
    axios.post("/logout").then(() => {
        setUser(null);
    });
  }
  return (
    <AuthContext.Provider
      value={{ user, errors, login, setUser, isSubmitting, setIsSubmitting, setErrors, csrf, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  return useContext(AuthContext);
}