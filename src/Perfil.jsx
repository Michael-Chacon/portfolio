export function Perfil(){
    return (
        <>        
        <section class="perfil">
        <section class="perfil__info">
          <h2 class="perfil__nombre">Alexis Chacón</h2>
          <h3 class="perfil__profesion">Soy <span>ingeniero de sistemas</span> <span>desarrollador backend;</span></h3>
            <p class="perfil__descripcion">Estoy enfocado en el desarrollo de código de calidad. 
            Me gusta aplicar buenas prácticas, manteniendo siempre orden y disciplina en cada proyecto. 
            Mi capacidad de comunicación y colaboración me permite crear soluciones eficientes y bien estructuradas.
            </p>
            <button class="perfil__btn__cv">Hoja de vida <i class='bx bxs-download'></i></button>
        </section>
        <section class="perfil__marco__foto">
        </section>
          <section class="perfil__foto">
            <img src="foto_perfil.png" alt=""/>
          </section>
        </section>
      </>
    )
}