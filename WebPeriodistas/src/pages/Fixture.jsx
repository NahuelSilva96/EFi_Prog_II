import React, { useState } from "react";
import { Button } from 'primereact/button';
import "../styles/Fixture.css";

function Fixture() {
    const equipos = [
        "Periodistas FC",
        "Cuyo FC",
        "Banco Popular",
        "Medicos B",
        "Contadores A",
        "Visitadores",
        "Banco Cordoba",
        "Docentes B",
        "Arquitectos Ing.",
        "Comunicadores",
        "Fusion Libre",
        "Judiciales"
    ];

    const fechaInicio = new Date("2025-09-21");
    const diasEntreFechas = 7;

    // Genera fixture y deja gl/gv en null (sin resultados)
    const generarFixture = (equipos) => {
        const arr = [...equipos];
        if (arr.length % 2 !== 0) arr.push("Descansa");
        const rounds = arr.length - 1;
        const fixtureLocal = [];

        for (let r = 0; r < rounds; r++) {
            const jornada = [];
            for (let i = 0; i < arr.length / 2; i++) {
                if (arr[i] !== "Descansa" && arr[arr.length - 1 - i] !== "Descansa") {
                    jornada.push({
                        local: arr[i],
                        visitante: arr[arr.length - 1 - i],
                        gl: null, // goles local
                        gv: null  // goles visitante
                    });
                }
            }
            const tmp = arr.splice(1, 1)[0];
            arr.splice(arr.length - 1, 0, tmp);
            fixtureLocal.push(jornada);
        }

        const vuelta = fixtureLocal.map(f =>
            f.map(p => ({ local: p.visitante, visitante: p.local, gl: null, gv: null }))
        );

        return [...fixtureLocal, ...vuelta];
    };

    const [fixture, setFixture] = useState(generarFixture(equipos));
    const [modal, setModal] = useState(null); // {fechaIndex, partidoIndex}
    const [showTablaPagina, setShowTablaPagina] = useState(false);

    const formatearFecha = (date, offset) => {
        const d = new Date(date);
        d.setDate(d.getDate() + offset * diasEntreFechas);
        return d.toLocaleDateString("es-AR", { weekday: 'short', day: 'numeric', month: 'numeric' });
    };

    const initials = (name) => {
        const p = name.split(" ");
        return p.length === 1 ? p[0].slice(0, 2).toUpperCase() : (p[0][0] + p[1][0]).toUpperCase();
    };

    const abrirVistaPartido = (fechaIndex, partidoIndex) => {
        setModal({ fechaIndex, partidoIndex });
    };

    const cerrarModal = () => setModal(null);

    // Calcula tabla: PJ, PG, PE, PP, GF, GC, DG, PTS ; orden A: PTS > DG > GF
    const calcularTabla = () => {
        const tabla = equipos.map(e => ({
            equipo: e, PJ: 0, PG: 0, PE: 0, PP: 0, GF: 0, GC: 0, DG: 0, PTS: 0
        }));

        fixture.flat().forEach(p => {
            if (p.gl == null || p.gv == null) return; // ignorar si sin resultado
            const local = tabla.find(t => t.equipo === p.local);
            const vis = tabla.find(t => t.equipo === p.visitante);
            if (!local || !vis) return;

            local.PJ++; vis.PJ++;
            local.GF += p.gl; local.GC += p.gv;
            vis.GF += p.gv; vis.GC += p.gl;

            if (p.gl > p.gv) {
                local.PG++; vis.PP++; local.PTS += 3;
            } else if (p.gl < p.gv) {
                vis.PG++; local.PP++; vis.PTS += 3;
            } else {
                local.PE++; vis.PE++; local.PTS++; vis.PTS++;
            }
        });

        tabla.forEach(t => t.DG = t.GF - t.GC);
        tabla.sort((a, b) => b.PTS - a.PTS || b.DG - a.DG || b.GF - a.GF);
        return tabla;
    };

    const renderVistaPartido = () => {
        if (!modal) return null;
        const { fechaIndex, partidoIndex } = modal;
        const partido = fixture[fechaIndex][partidoIndex];
        if (!partido) return null;

        const tabla = calcularTabla();

        return (
            <div className="modal-bg" onClick={cerrarModal}>
                <div className="modal-large" onClick={e => e.stopPropagation()}>
                    <button className="modal-close" onClick={cerrarModal}>✕</button>

                    <div className="partido-large">
                        <div className="equipo-large">
                            <div className="logo-large">{initials(partido.local)}</div>
                            <div className="nombre-large">{partido.local}</div>
                        </div>

                        <div className="detalle-large">
                            <div className="vs-large">VS</div>
                            <div className="info-fecha">{formatearFecha(fechaInicio, fechaIndex)}</div>
                            <div className="marcador-large">
                                {partido.gl != null && partido.gv != null ? `${partido.gl} - ${partido.gv}` : "—  -  —"}
                            </div>
                        </div>

                        <div className="equipo-large">
                            <div className="logo-large">{initials(partido.visitante)}</div>
                            <div className="nombre-large">{partido.visitante}</div>
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button onClick={() => { setShowTablaPagina(true); setModal(null); }}>
                            Ver tabla en página
                        </button>
                        <button onClick={cerrarModal} className="btn-secondary">Cerrar</button>
                    </div>

                    <hr />

                    <h4>Tabla de posiciones</h4>
                    <div className="tabla-wrapper">
                        <table className="tabla-pos">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Equipo</th>
                                    <th>PTS</th>
                                    <th>PJ</th>
                                    <th>PG</th>
                                    <th>PE</th>
                                    <th>PP</th>
                                    <th>GF</th>
                                    <th>GC</th>
                                    <th>DG</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabla.map((t, idx) => (
                                    <tr key={t.equipo}>
                                        <td>{idx + 1}</td>
                                        <td className="td-equipo">{t.equipo}</td>
                                        <td>{t.PTS}</td>
                                        <td>{t.PJ}</td>
                                        <td>{t.PG}</td>
                                        <td>{t.PE}</td>
                                        <td>{t.PP}</td>
                                        <td>{t.GF}</td>
                                        <td>{t.GC}</td>
                                        <td>{t.DG}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    };

    // Vista de página completa para la tabla de posiciones
    const renderPaginaTabla = () => {
        const tabla = calcularTabla();
        return (
            <div className="tabla-pagina">
                <div className="pagina-header">
                    <h2>Tabla de posiciones — Temporada 2025</h2>
                    <button onClick={() => setShowTablaPagina(false)} className="btn-secondary">Volver</button>
                </div>

                <div className="tabla-wrapper">
                    <table className="tabla-pos full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Equipo</th>
                                <th>PTS</th>
                                <th>PJ</th>
                                <th>PG</th>
                                <th>PE</th>
                                <th>PP</th>
                                <th>GF</th>
                                <th>GC</th>
                                <th>DG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabla.map((t, idx) => (
                                <tr key={t.equipo}>
                                    <td>{idx + 1}</td>
                                    <td className="td-equipo">{t.equipo}</td>
                                    <td>{t.PTS}</td>
                                    <td>{t.PJ}</td>
                                    <td>{t.PG}</td>
                                    <td>{t.PE}</td>
                                    <td>{t.PP}</td>
                                    <td>{t.GF}</td>
                                    <td>{t.GC}</td>
                                    <td>{t.DG}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    if (showTablaPagina) return renderPaginaTabla();

    return (
        <main className="fixture-dark">
            <h2>Partidos — Temporada 2025</h2>

            {fixture.map((fecha, index) => (
                <section key={index} className="fecha-card">
                    <header className="fecha-header">
                        <h3>Clausura · Jornada {index + 1} de {fixture.length}</h3>
                        <span className="fecha-peq">{formatearFecha(fechaInicio, index)}</span>
                    </header>

                    <div className="grilla-partidos">
                        {fecha.map((p, i) => (
                            <article
                                key={i}
                                className="partido-card"
                                onClick={() => abrirVistaPartido(index, i)}
                                role="button"
                                tabIndex={0}
                            >
                                <div className="partido-left">
                                    <div className="equipo">
                                        <div className="logo-placeholder"><span>{initials(p.local)}</span></div>
                                        <span className="equipo-nombre">{p.local}</span>
                                    </div>

                                    <div className="vs-area">vs</div>

                                    <div className="equipo">
                                        <div className="logo-placeholder"><span>{initials(p.visitante)}</span></div>
                                        <span className="equipo-nombre">{p.visitante}</span>
                                    </div>
                                </div>

                                <div className="partido-right">
                                    <div className="resultado-chip">
                                        {p.gl != null && p.gv != null ? `${p.gl} - ${p.gv}` : "—"}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ))}

            {modal && renderVistaPartido()}
        </main>
    );
}

export default Fixture;
