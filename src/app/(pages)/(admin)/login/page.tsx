'use client'
import React, { useState } from "react";
import { showAlert } from "@/app/util/alerts";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Cookies from 'js-cookie';

export default function Logink() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e:React.FormEvent) => {
      e.preventDefault();
      // Aquí puedes manejar la lógica de autenticación
      console.log('Form submitted');

      console.log('Username:', username);
      console.log('Password:', password);
      if (!username || !password || username === '' || password === '' || username.length < 3 || password.length < 3 ) {
        showAlert(2,'Por favor, rellena todos los campos');
        return
      }
      showAlert(1,'Campos correctos');
      Cookies.set('token', username);
      router.push('/admin/dashboard');


    };
    return (
      <>
        <div className="bg-slate-800 flex items-center justify-center min-h-screen ">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <h2 className="text-2xl font-bold text-center">Iniciar Sesion</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Ingresar
            </button>
          </form>
        </div>
      </div>
      </>
    );
}