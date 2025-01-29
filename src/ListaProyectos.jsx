import "./ListaProyectos.css"
import { ItemProyecto } from "./ItemProyecto"
export function ListaProyectos() {
    return(
        <>
            <section className="proyectos">
                <section className="proyectos__contenedor">
                <ItemProyecto 
                    img={"cdr system.webp"} 
                    tipo={"Backend"} 
                    link={"#"} 
                    nombre={"Prueba"} 
                    descripcion={"Plataforma de gestion academica y administrativa para colegios publicos"} 
                    tecnologias={["java", "spring-boot", "javascript", "html5", "css3"]}>
                </ItemProyecto>

                <ItemProyecto 
                    img={"airlines.webp"} 
                    tipo={"Backend"} 
                    link={"#"} 
                    nombre={"Airlines world"} 
                    descripcion={"Plataforma de gestion academica y administrativa para colegios publicos"} 
                    tecnologias={["java", "spring-boot", "javascript", "html5", "css3"]}>
                </ItemProyecto>
                </section>
            </section>
        </>
    )
}