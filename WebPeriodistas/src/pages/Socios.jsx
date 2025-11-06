import React, { useState } from "react";
import { Button } from "primereact/button";
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
          
          <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10,flexWrap: 'wrap', fontSize: 20}}>Aun no sos socio! <Button label="Registrarse" text severity="warning" style={{ padding: 10 }}/></p>
          
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