import { LenguajeComponent } from "../../utils/LenguajeComponent"
import { Link } from "react-router-dom";
import { useId } from "react";

export function ItemProyecto({ id, img, tipo, link, nombre, descripcion, tecnologias }) {
  const mapId = useId()

  const listadoLenguajes = tecnologias?.map((lenguaje, index) =>
    <LenguajeComponent key={index} lenguaje={lenguaje}></LenguajeComponent>
  );

  return (
    <>
      <div className="proyecto__item">
        <div className="proyecto__foto">
          <img src={img} alt="cdr system" className="proyecto__img" />
        </div>
        <div className="proyecto__detalles">
          <div className="proyecto__encabezado">
            <span className="proyecto__tipo-container">
              {tipo?.map((element, index) => (
                <h5 key={mapId + index} className="proyecto__tipo">{element}</h5>
              ))}
            </span>
            <Link to={`/detalle/${nombre}`} className="proyecto__btnDetalles">Ver más</Link>
          </div>
          <h3 className="proyecto__nombre">{nombre}</h3>
          <p className="proyecto__descripcionl">{descripcion}</p>
          <div className="proyecto__tecnologias">
            {listadoLenguajes}
          </div>
        </div>
      </div>
    </>
  )
}