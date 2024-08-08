// hooks/useAuth.js
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { showAlert } from "../util/alerts";

export const useAuth = () => {
  const router = useRouter();
  useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
      } 
    
  }, [router]);
};
