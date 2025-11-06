import React, { useState } from "react";
import { Button } from "primereact/button";
import "../styles/haceteSocio.css"; 

function HaceteSocio() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
  });
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, email, password } = formData;

    if (!nombre || !email || !password) {
      setMensaje("Por favor completa todos los campos.");
      return;
    }

    setMensaje(`¡Registro exitoso! Bienvenido, ${nombre}`);
    setFormData({
      nombre: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="s-container">
      <h1>Asóciate</h1>
      <form onSubmit={handleSubmit} className="s-form">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          placeholder="Nombre completo"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="ejemplo@correo.com"
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Escribe tu contraseña"
        />

        <button type="submit" className="submit-button">Asociarme</button>
        <p style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, fontSize: 20}}>Si ya estas registrado <Button label="Iniciar Sesion" text severity="warning" style={{ padding: 10 }}/></p>

      </form>
      {mensaje && (
        <p className={mensaje.includes("exitoso") ? "mensaje-exito" : "mensaje-error"}>
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default HaceteSocio;