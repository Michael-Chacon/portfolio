export function LenguajeComponent({lenguaje}){
    const lenguajeEnMayuscula = lenguaje.charAt(0).toUpperCase() + lenguaje.slice(1)
    
    return (
        <>
            <div className="proyecto__lenguajel">
                <i className={`bx bxl-${lenguaje} icono__lenguajel`} ></i>
                <p>{lenguajeEnMayuscula}</p>
            </div>
        </>
    )
}