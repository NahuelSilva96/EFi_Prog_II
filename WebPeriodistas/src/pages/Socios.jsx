import React, { useState } from "react";
import "../styles/haceteSocio.css";

function Socios() {
  const [formData, setFormData] = useState({
    email: "ejemplo@correo.com",
    password: "",
  });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setMensaje("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setMensaje("Intento de inicio de sesión simulado.");
  };

  return (
    <div className="page-wrapper"> 
      <div className="s-container">
        
        <form onSubmit={handleLogin} className="s-form">
          <h2>Bienvenido Socio</h2>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@correo.com"
            required
          />

          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Escribe tu contraseña"
            required
          />

          <button type="submit" className="submit-button">Iniciar Sesión</button>
        </form>

        {mensaje && (
          <p className="mensaje-simulado">
            {mensaje}
          </p>
        )}

      </div>
    </div>
  );
}

export default Socios;