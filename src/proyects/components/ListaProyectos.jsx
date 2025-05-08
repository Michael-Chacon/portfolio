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
                            id={[project.id]}
                            img={project.img}
                            tipo={project.tipo}
                            link={project.link}
                            nombre={project.nombre}
                            descripcion={project.descripcion}
                            tecnologias={project.tecnologias}
                        >
                        </ItemProyecto>
                    ))}
                </section>
            </section>
        </>
    )
}