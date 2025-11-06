import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";

function NoticiaCard({ titulo, descripcion, imagen }) {
  const [likes, setLikes] = useState(0);
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [verMas, setVerMas] = useState(false)

  const handleComentar = () => {
    if (!nuevoComentario.trim()) return;
    setComentarios([...comentarios, nuevoComentario.trim()]);
    setNuevoComentario("");
  };

  return (
    <div className="noti-card">
        <div className="cabecera">
            <img
                src={imagen}
                alt={titulo}
                className="imagen-noticia"
            />
            <h3>{titulo}</h3>
            <div className="contenido">
                <h5 className="subtitulo">{descripcion}</h5>
                <p className={`nota ${verMas ? "expandido" : ""}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro rem odio nemo in rerum cumque eveniet aspernatur maxime facere, ullam repellat illo qui.</p>
            </div>
            <div className="btn-ver">
            <Button 
                label={verMas ? "Ver Menos" : "Ver Mas"}
                className="p-button-text"
                onClick={()=> setVerMas(!verMas)}
            />
            </div>
        </div>
        <div className="comentarios">
           
            {/* COMENTARIOS */}
            <div style={{ marginTop: "10px" }}>
                  {comentarios.length === 0 ? (
                    <p style={{ color: "gray" }}>Sin comentarios aún.</p>
                  ) : (
                    comentarios.map((c, i) => (
                      <div
                        key={i}
                        style={{
                          background: "#f1f1f1",
                          borderRadius: "6px",
                          padding: "6px",
                          marginBottom: "5px",
                        }}
                      >
                        {c}
                      </div>
                    ))
                  )}
                </div>
            <div>
            <InputTextarea
                rows={2}
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
                placeholder="Escribe un comentario..."
                style={{ width: "100%", marginBottom: "10px", padding: '10px'}}
            />
            <div className="botonera">
                <div className="btn-ico">
                    {/* LIKE */}
                    <Button
                        icon="pi pi-heart"
                        className="p-button-text"
                        onClick={() => setLikes(likes + 1)}
                        style={{color: 'red'}}
                    />
                    <span>{likes} Likes</span>
                </div>
                <div className="btn-ico">
                    <Button className="p-button-text" icon="pi pi-send" onClick={handleComentar} />
                    <span>Comentar</span>
                </div>
            </div>
            </div>
            </div>
        </div>
    
  );
}

export default NoticiaCard;
