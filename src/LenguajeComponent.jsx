export function LenguajeComponent({lenguaje}){
    const lenguajeEnMayuscula = lenguaje.charAt(0).toUpperCase() + lenguaje.slice(1)
    
    return (
        <>
            <div className="proyecto__lenguaje">
                <i className={`bx bxl-${lenguaje} icono__lenguaje`} ></i>
                <p>{lenguajeEnMayuscula}</p>
            </div>
        </>
    )
}