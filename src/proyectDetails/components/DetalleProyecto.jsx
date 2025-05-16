import { LenguajeComponent } from "../../utils/LenguajeComponent";
import { projects } from "../../proyects/data/projects.json"
import { useParams } from "react-router-dom";
import Carrusel from "./Carrusel";
import "./DetalleProyecto.css"

export function DetalleProyecto() {
    const parametro = useParams()

    const proyectoActual = projects.filter(proyect => proyect.nombre === parametro.nombreProyecto)
    const { tipo, tecnologias: lenguajes, nombre, inicio, fin, descripcion, URL_repo: repo, imgProject, publico } = proyectoActual[0]

    const listaTags = tipo?.map((tag, index) =>
        <span key={index} className="tag">{tag}</span>
    );

    const listaLenguajes = lenguajes?.map((lenguaje, index) =>
        <LenguajeComponent key={index} lenguaje={lenguaje}></LenguajeComponent>
    );

    return (
        <>
            <section className="proyecto">
                <section className="proyecto__informacion">
                    <h2 className="proyecto__nombre" style={{ textAlign: 'center' }}>{nombre}</h2>
                    <div className="proyecto__tags">
                        {listaTags}
                    </div>
                    <div className="proyecto__fechas">
                        <div className="proyecto__inicio">
                            <p>Fecha inicio</p>
                            <span>{inicio}</span>
                        </div>
                        <div className="proyecto__fin">
                            <p>Fecha fin</p>
                            <span>{fin}</span>
                        </div>
                    </div>
                    <p className="proyecto__descripcion">
                        {descripcion}
                        <br />
                        <br />
                        {publico ? "Para ver todos los detalles lea el archivo readme.md el cual se escuentra en el repositorio de GitHub." : ''}
                    </p>
                    <a href={publico ? repo : '#'} target={publico ? "_black" : undefined} role="button" className="btnRepo" disabled><i className='bx bxl-github'></i> {publico ? 'Ver repositorio' : 'Repo privado'}</a>
                </section>
                <section className="proyecto__video">
                    {/* <img src='../../cdr system.webp' className="video" alt="Foto proyecto" /> */}
                    <Carrusel images={imgProject} />
                    <div>
                        <p className="warning">Como no cuento con presupuesto para desplegar los proyectos en la nube, comparto estas imagenes.</p>
                        <div className="listado__lenguajes">
                            {listaLenguajes}
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}