import { LenguajeComponent } from "../../utils/LenguajeComponent"

export function ItemProyecto({ img, tipo, link, nombre, descripcion, tecnologias }) {

  const listadoLenguajes = tecnologias.map((lenguaje, index) =>
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
            <h5 className="proyecto__tipo">{tipo}</h5>
            <a href={link} className="proyecto__btnDetalles">Ver más</a>
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