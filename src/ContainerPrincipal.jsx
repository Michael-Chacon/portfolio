import { MenuGeneral } from './MenuGeneral'
import { HeaderPrincipal } from './HeaderPrincipal'
import { Secciones } from './Secciones'
import "./ContainerPrincipal.css"
import "./Perfil.css"
import "./SkillsComponent.css"
import "./ListaProyectos.css"
import "./DetalleProyecto.css"
import { Perfil } from './Perfil'
import { SkillsComponent } from './SkillsComponent'
import { ListaProyectos } from './ListaProyectos'
import { DetalleProyecto } from './DetalleProyecto'
export function ContainerPrincipal(){
    return(
        <>
          <section className="container">
            <aside className="menu">
              <img className="menu__logo" src="logo.png" alt="logo portfolio Alexis"/>
              <ul className="menu__opciones">
                <li className="menu__secciones" title="Seccion tal"><i className='bx bxs-user-rectangle'></i></li>
                <li className="menu__secciones" title="Seccion tal"><i className='bx bx-check-double'></i></li>
                <li className="menu__secciones" title="Seccion tal"><i className='bx bx-folder-open'></i></li>
                <li className="menu__secciones" title="Seccion tal"><i className='bx bx-customize'></i></li>
                <li className="menu__secciones" title="Seccion tal"><i className='bx bxs-contact'></i></li>
                <li className="menu__secciones" title="Seccion tal"><i className='bx bx-heart'></i></li>
              </ul>
            </aside>
            <main className="principal">
              <header className="principal__header">
                <div className="principal__flechas">
                  <i className='bx bx-chevron-left'></i>
                  <i className='bx bx-chevron-right' style={{color: 'gray'}}></i>
                </div>
                <p className="principal__titulo"><i className='bx bxs-hand-right'></i> Proyectos</p>
                <i className='principal__header--modo bx bx-moon' ></i>
              </header>
              <section className="principal__secciones">
                <div className="contenido">
                  {/* <Perfil></Perfil> */}
                  {/* <SkillsComponent></SkillsComponent> */}
                  {/* <ListaProyectos></ListaProyectos> */}
                  <DetalleProyecto></DetalleProyecto>
                </div>
              </section>
            </main>
          </section>
        </>
    )
}