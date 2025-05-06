import "./Perfil.css"

export function Perfil() {
  return (
    <>
      <section class="perfil">
        <section class="perfil__info">
          <h2 class="perfil__nombre">Alexis Chacón</h2>
          <h3 class="perfil__profesion">Soy <span>ingeniero de sistemas</span> <span>desarrollador backend;</span></h3>
          <p class="perfil__descripcion">
            Soy desarrollador Java especializado en APIs RESTful con Spring Boot e Hibernate. Diseño y gestiono bases de datos relacionales con MySQL, y construyo arquitecturas de microservicios usando Spring Boot, Eureka y Docker. Aunque mi pasión es el backend, también desarrollo interfaces web con HTML, CSS, JavaScript y React, y utilizo Git para el control de versiones. Estoy enfocado en el desarrollo de código de calidad y disfruto compartir conocimientos y apoyar a otros en su aprendizaje.

          </p>
          <button class="perfil__btn__cv">Hoja de vida <i class='bx bxs-download'></i></button>
        </section>
        <section class="perfil__marco__foto">
        </section>
        <section class="perfil__foto">
          <img src="foto_perfil.png" alt="" />
        </section>
      </section>
    </>
  )
}