import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { Navegacion } from './utils/Navegacion'
import { Tooltip } from 'react-tooltip';
import "./ContainerPrincipal.css"

export function ContainerPrincipal() {
  const location = useLocation()

  // Obtener y limpiar el nombre de la ruta actual para mostrarlo en el header
  const rutaActual = location.pathname.replace('/', '')
  const nombreRuta = rutaActual.includes('/') ? rutaActual.charAt(0).toUpperCase() + rutaActual.slice(1, rutaActual.indexOf('/')) || 'Perfil' : rutaActual.charAt(0).toUpperCase() + rutaActual.slice(1) || 'Perfil'

  return (
    <>
      <section className="container">
        <aside className="menu">
          <img className="menu__logo" src="logo.png" alt="logo portfolio Alexis" />
          <ul className="menu__opciones">
            <NavLink to="/perfil" className="menu__secciones" data-tooltip-id="perfil" data-tooltip-content="Perfil"><i className='bx bxs-user-rectangle'></i></NavLink>
            <Tooltip id='perfil' className='tooltip-personalizado' place='right' />
            <NavLink to="/skills" className="menu__secciones" data-tooltip-id="skills" data-tooltip-content=" Skills"><i className='bx bx-check-double'></i></NavLink>
            <Tooltip id='skills' className='tooltip-personalizado' place='right' />
            <NavLink to="/proyectos" className="menu__secciones" data-tooltip-id="proyectos" data-tooltip-content="Proyectos"><i className='bx bx-folder-open'></i></NavLink>
            <Tooltip id='proyectos' className='tooltip-personalizado' />
            <NavLink to="/" className="menu__secciones" data-tooltip-id="otros" data-tooltip-content="Otros"><i className='bx bx-customize'></i></NavLink>
            <Tooltip id='otros' className='tooltip-personalizado' place='right' />
            <NavLink to="/" className="menu__secciones" data-tooltip-id="otros" data-tooltip-content="Otros"><i className='bx bxs-contact'></i></NavLink>
            <Tooltip id='otros' className='tooltip-personalizado' place='right' />
            <NavLink to="/" className="menu__secciones" data-tooltip-id="otros" data-tooltip-content="Otros"><i className='bx bx-heart'></i></NavLink>
            <Tooltip id='otros' className='tooltip-personalizado' place='right' />
          </ul>
        </aside>
        <main className="principal">
          <header className="principal__header">
            <Navegacion />
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