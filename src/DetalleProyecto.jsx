import { LenguajeComponent } from "./LenguajeComponent";

export function DetalleProyecto({nombre, tags, inicio, fin, descripcion, repo, URLVideo, lenguajes}){
    
    const listaTags = tags?.map((tag, index) =>
        <span key={index} className="tag">{tag}</span>
    );

    const listaLenguajes = lenguajes?.map((lenguaje, index) =>
        <LenguajeComponent key={index} lenguaje={lenguaje}></LenguajeComponent>
    );
    
    return(
        <>
            <section className="proyecto">
                <section className="proyecto__informacion">
                    <h2 className="proyecto__nombre">{nombre}</h2>
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
                        <br/>
                        <br/>
                        Para ver todos los detalles lea el archivo readme.md el cual se escuentra en el repositorio de GitHub.
                    </p>
                    <a href={repo} target="_black" role="button" className="btnRepo"><i className='bx bxl-github'></i> Ver repositorio</a>
                </section>
                <section className="proyecto__video">
                    <video src={URLVideo} className="video" controls loop muted></video>
                    <p className="warning">Como no cuento con presupuesto para alojar los proyectos en la nube, comparto un video que muestra su funcionamiento.</p>
                    <div className="listado__lenguajes">
                        {listaLenguajes}
                    </div>
                </section>  
            </section>
        </>
    )
}