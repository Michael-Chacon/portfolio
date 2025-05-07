import { ItemProyecto } from "./ItemProyecto"
import { projects } from "../data/projects.json"
import "./ListaProyectos.css"

export function ListaProyectos() {
    return (
        <>
            <section className="proyectos">
                <section className="proyectos__contenedor">
                    {projects?.map((project) => (
                        <ItemProyecto
                            key={project.id}
                            img={project.img}
                            tipo={project.tipo}
                            link={project.link}
                            nombre={project.nombre}
                            descripcion={project.descripcion}
                            tecnologias={project.tecnologias}>
                        </ItemProyecto>
                    ))}

                    {/* <ItemProyecto
                        img={"airlines.webp"}
                        tipo={"Backend"}
                        link={"#"}
                        nombre={"Airlines world"}
                        descripcion={"Plataforma de gestion academica y administrativa para colegios publicos"}
                        tecnologias={["java", "spring-boot", "javascript", "html5", "css3"]}>
                    </ItemProyecto> */}
                </section>
            </section>
        </>
    )
}