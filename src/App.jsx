import { ContainerPrincipal } from './ContainerPrincipal'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Perfil } from './aboutMe/components/Perfil'
import { SkillsComponent } from './skills/components/SkillsComponent'
import { ListaProyectos } from './proyects/components/ListaProyectos'
import { DetalleProyecto } from './proyectDetails/components/DetalleProyecto'
import { Certificate } from './certificates/components/Certificate'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ContainerPrincipal />}>
          <Route index element={<Perfil />} />
          <Route path='perfil' element={<Perfil />} />
          <Route path='skills' element={<SkillsComponent />} />
          <Route path='proyectos' element={<ListaProyectos />} />
          <Route path='detalle/:nombreProyecto' element={<DetalleProyecto />} />
          <Route path='certificados' element={<Certificate />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <ContainerPrincipal></ContainerPrincipal>
  )
}

export default App
