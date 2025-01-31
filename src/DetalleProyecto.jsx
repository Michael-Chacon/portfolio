export function DetalleProyecto(){
    return(
        <>
            <section className="proyecto">
                <section className="proyecto__informacion">
                    <h2 className="proyecto__nombre">CDR System</h2>
                    <div className="proyecto__tags">
                        <span className="tag">Backend</span>
                        <span className="tag">API</span>
                        <span className="tag">CLI</span>
                    </div>
                    <div className="proyecto__fechas">
                        <div className="proyecto__inicio">
                        <p>Fecha inicio</p>
                        <span>14 febrero 2022</span>
                        </div>
                        <div className="proyecto__fin">
                        <p>Fecha fin</p>
                        <span>11 marzo 2022</span>
                        </div>
                    </div>
                    <p className="proyecto__descripcion">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis velit delectus aut distinctio labore sunt autem unde, beatae sed harum id earum expedita magni molestiae, ab, porro suscipit corrupti illum! Nesciunt, qui labore, ea delectus nisi porro vitae iste quo odio, sequi error. Optio unde labore excepturi, laudantium voluptatum itaque magni esse, corrupti dolores deserunt enim. Quidem, cupiditate vel!
                        <br/>
                        <br/>
                        Para ver todos los detalles lea el archivo readme.md el cual se escuentra en el repositorio de GitHub.
                    </p>
                    <a href="#" role="button" className="btnRepo"><i className='bx bxl-github'></i> Ver repositorio</a>
                </section>
                <section className="proyecto__video">
                    <video src="imgs/ham.mp4" className="video" controls loop muted></video>
                    <p className="warning">Como no cuento con presupuesto para alojar los proyectos en la nube, comparto un video que muestra su funcionamiento.</p>
                    <div className="listado__lenguajes">
                        <div className="proyecto__lenguaje">
                        <i className="bx bxl-java icono__lenguaje"></i>
                        <p>Java</p>
                        </div>
                        <div className="proyecto__lenguaje">
                        <i className="bx bxl-spring-boot icono__lenguaje"></i>
                        <p>Spring boot</p>
                        </div>
                        <div className="proyecto__lenguaje">
                        <i className="bx bxl-javascript icono__lenguaje"></i>
                        <p>JavaScript</p>
                        </div>
                        <div className="proyecto__lenguaje">
                        <i className="bx bxl-html5 icono__lenguaje"></i>
                        <p>HTML5</p>
                        </div>
                        <div className="proyecto__lenguaje">
                        <i className="bx bxl-css3 icono__lenguaje"></i>
                        <p>CSS3</p>
                        </div>
                    </div>
                </section>  
            </section>
        </>
    )
}