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
          <div>
            <img className="menu__logo" src="logo.png" alt="logo portfolio Alexis" />
            <ul className="menu__opciones">
              <NavLink to="/perfil" className="menu__secciones" data-tooltip-id="perfil" data-tooltip-content="Perfil"><i className='bx bxs-user-rectangle'></i></NavLink>
              <Tooltip id='perfil' className='tooltip-personalizado' place='right' />
              <NavLink to="/skills" className="menu__secciones" data-tooltip-id="skills" data-tooltip-content=" Skills"><i className='bx bx-check-double'></i></NavLink>
              <Tooltip id='skills' className='tooltip-personalizado' place='right' />
              <NavLink to="/proyectos" className="menu__secciones" data-tooltip-id="proyectos" data-tooltip-content="Proyectos"><i className='bx bx-folder-open'></i></NavLink>
              <Tooltip id='proyectos' className='tooltip-personalizado' />
              <NavLink to="/certificados" className="menu__secciones" data-tooltip-id="certificados" data-tooltip-content="Certificados"><i class='bx bx-certification'></i></NavLink>
              <Tooltip id='certificados' className='tooltip-personalizado' place='right' />
              <NavLink to="/" className="menu__secciones" data-tooltip-id="meGusta" data-tooltip-content="Cosas favoritas"><i className='bx bx-heart'></i></NavLink>
              <Tooltip id='meGusta' className='tooltip-personalizado' place='right' />
            </ul>
          </div>
          <ul className='menu__opciones redes'>
            <a href="https://www.linkedin.com/in/michael-alexis-chac%C3%B3n-mar%C3%ADn/" target='_black' className="menu__secciones" data-tooltip-id="linkedin" data-tooltip-content="Linkedin"><i class='bx bxl-linkedin-square'></i></a>
            <Tooltip id='linkedin' className='tooltip-personalizado' place='right' />
            <a href="https://github.com/Michael-chacon" target='_black' className="menu__secciones" data-tooltip-id="github" data-tooltip-content="Github"><i class='bx bxl-github'></i></a>
            <Tooltip id='github' className='tooltip-personalizado' place='right' />
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