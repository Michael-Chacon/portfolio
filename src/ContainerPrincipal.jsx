import { MenuGeneral } from './utils/MenuGeneral'
import { HeaderPrincipal } from './utils/HeaderPrincipal'
import { Secciones } from './utils/Secciones'
import "./ContainerPrincipal.css"
import { Perfil } from './aboutMe/components/Perfil'
import { SkillsComponent } from './skills/components/SkillsComponent'
import { ListaProyectos } from './proyects/components/ListaProyectos'
import { DetalleProyecto } from './proyectDetails/components/DetalleProyecto'
export function ContainerPrincipal() {
  return (
    <>
      <section className="container">
        <aside className="menu">
          <img className="menu__logo" src="logo.png" alt="logo portfolio Alexis" />
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
              <i className='bx bx-chevron-right' style={{ color: 'gray' }}></i>
            </div>
            <p className="principal__titulo"><i className='bx bxs-hand-right'></i> Proyectos</p>
            <i className='principal__header--modo bx bx-moon' ></i>
          </header>
          <section className="principal__secciones">
            <div className="con tenido">
              {/* <Perfil></Perfil> */}
              {/* <ListaProyectos></ListaProyectos> */}
              <SkillsComponent></SkillsComponent>
              {/* <DetalleProyecto
                nombre={"CDR System"}
                tags={["Backend", "API", "CLI"]}
                inicio={"12 enero 2024"}
                fin={"26 febrero 2024"}
                descripcion={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis velit delectus aut distinctio labore sunt autem unde, beatae sed harum id earum expedita magni molestiae, ab, porro suscipit corrupti illum! Nesciunt, qui labore, ea delectus nisi porro vitae iste quo odio, sequi error. Optio unde labore excepturi, laudantium voluptatum itaque magni esse, corrupti dolores deserunt enim. Quidem, cupiditate vel!"}
                repo={"#"}
                URLVideo={"ham.mp4"}
                lenguajes={["java", "javascript", "html5", "css3"]}>
              </DetalleProyecto> */}
            </div>
          </section>
        </main>
      </section>
    </>
  )
}