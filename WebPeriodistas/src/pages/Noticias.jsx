import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputTextarea } from "primereact/inputtextarea";

function CarruselNoticias() {
  const noticias = [
    { id: 1, titulo: "Goleada en la liga", descripcion: "El equipo ganó 5 a 0", imagen: "/img/joni16.jpeg" },
    { id: 2, titulo: "Nuevo refuerzo", descripcion: "Se incorpora el delantero", imagen: "/img/charla.jpeg" },
    { id: 3, titulo: "Partido suspendido", descripcion: "El equipo disputará una fecha suspendida esta semana", imagen: "/img/charla1.jpeg" },
    { id: 4, titulo: "Victoria en penales", descripcion: "Triunfo emocionante tras tanda de penales", imagen: "/img/charla2.jpeg" },
    { id: 5, titulo: "Final furioso", descripcion: "Se jugó, se raspó y casi se van a las manos", imagen: "/img/tecnico.jpeg" },
  ];

  // Estado del modal y datos dinámicos
  const [selectedNoticia, setSelectedNoticia] = useState(null);
  const [visible, setVisible] = useState(false);
  const [likes, setLikes] = useState({});
  const [comentarios, setComentarios] = useState({});
  const [nuevoComentario, setNuevoComentario] = useState("");

  const abrirModal = (noticia) => {
    setSelectedNoticia(noticia);
    setVisible(true);
  };

  const cerrarModal = () => {
    setVisible(false);
    setNuevoComentario("");
  };

  const handleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleComentar = () => {
    if (!nuevoComentario.trim()) return;
    setComentarios((prev) => ({
      ...prev,
      [selectedNoticia.id]: [
        ...(prev[selectedNoticia.id] || []),
        nuevoComentario.trim(),
      ],
    }));
    setNuevoComentario("");
  };

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
    { breakpoint: "1199px", numVisible: 3, numScroll: 1 },
    { breakpoint: "767px", numVisible: 2, numScroll: 1 },
    { breakpoint: "575px", numVisible: 1, numScroll: 1 },
  ];

  return (
    <div>
      <div className="noticias-conteiner">
        <h2 className="titulo-noticias">Noticias</h2>
        <div className="noticias">
          {[...noticias, ...noticias].map((noticia, index) => (
            <div
              className="card_noticias"
              key={index}
              onClick={() => abrirModal(noticia)}
              style={{ cursor: "pointer" }}
            >
              <img src={noticia.imagen} alt={noticia.titulo} />
              <div className="card_noticias_content">
                <p className="card_noticias_title">{noticia.titulo}</p>
                <p className="card_noticias_description">
                  {noticia.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mas-noticias">
          <Button
            label="Más Noticias"
            className="btn-hacete-socio"
            icon="pi pi-chevron-right"
          />
        </div>
      </div>

      {/* Modal con detalles de la noticia */}
      <Dialog
        header={selectedNoticia ? selectedNoticia.titulo : ""}
        visible={visible}
        style={{ width: "60vw", maxWidth: "800px" }}
        modal
        onHide={cerrarModal}
      >
        {selectedNoticia && (
          <div className="flex flex-column gap-3">
            <img
              src={selectedNoticia.imagen}
              alt={selectedNoticia.titulo}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <p>{selectedNoticia.descripcion}</p>

            {/* Botón de Like */}
            <div className="flex align-items-center gap-2 mt-2">
              <Button
                icon="pi pi-heart"
                className="p-button-text"
                onClick={() => handleLike(selectedNoticia.id)}
              />
              <span>{likes[selectedNoticia.id] || 0} Likes</span>
            </div>

            {/* Comentarios */}
            <div className="mt-4">
              <h4>Comentarios</h4>
              <InputTextarea
                rows={3}
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
                placeholder="Escribe un comentario..."
                style={{ width: "100%", marginBottom: "10px" }}
              />
              <Button
                label="Enviar"
                icon="pi pi-send"
                onClick={handleComentar}
              />

              <div style={{ marginTop: "15px" }}>
                {(comentarios[selectedNoticia.id] || []).length === 0 ? (
                  <p style={{ color: "gray" }}>Sin comentarios aún.</p>
                ) : (
                  comentarios[selectedNoticia.id].map((coment, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#f7f7f7",
                        borderRadius: "8px",
                        padding: "8px",
                        marginBottom: "6px",
                      }}
                    >
                      {coment}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </div>
  );
}

export default CarruselNoticias;
