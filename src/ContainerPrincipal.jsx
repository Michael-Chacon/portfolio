import { NavLink, Outlet, useLocation } from 'react-router-dom'
import "./ContainerPrincipal.css"
import { Navegacion } from './utils/Navegacion'

export function ContainerPrincipal() {
  const location = useLocation()

  // Obtener y limpiar el nombre de la ruta actual para mostrarlo en el header
  const rutaActual = location.pathname.replace('/', '')
  const nombreRuta = rutaActual.charAt(0).toUpperCase() + rutaActual.slice(1, rutaActual.indexOf('/')) || 'Perfil'

  return (
    <>
      <section className="container">
        <aside className="menu">
          <img className="menu__logo" src="logo.png" alt="logo portfolio Alexis" />
          <ul className="menu__opciones">
            <NavLink to="/perfil" className="menu__secciones" title="Seccion tal"><i className='bx bxs-user-rectangle'></i></NavLink>
            <NavLink to="/skills" className="menu__secciones" title="Seccion tal"><i className='bx bx-check-double'></i></NavLink>
            <NavLink to="/proyectos" className="menu__secciones" title="Seccion tal"><i className='bx bx-folder-open'></i></NavLink>
            <NavLink to="/" className="menu__secciones" title="Seccion tal"><i className='bx bx-customize'></i></NavLink>
            <NavLink to="/" className="menu__secciones" title="Seccion tal"><i className='bx bxs-contact'></i></NavLink>
            <NavLink to="/" className="menu__secciones" title="Seccion tal"><i className='bx bx-heart'></i></NavLink>
          </ul>
        </aside>
        <main className="principal">
          <header className="principal__header">
            {/* <div className="principal__flechas">
              <i className='bx bx-chevron-left'></i>
              <i className='bx bx-chevron-right' style={{ color: 'gray' }}></i>
            </div> */}
            <Navegacion/>
            <p className="principal__titulo"><i className='bx bxs-hand-right'></i> {nombreRuta}</p>
            <i className='principal__header--modo bx bx-moon' ></i>
          </header>
          <section className="principal__secciones">
            <div className="contenido">
              <Outlet />
            </div>
          </section>
        </main>
      </section>
    </>
  )
}