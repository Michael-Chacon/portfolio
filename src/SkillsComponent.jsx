export function SkillsComponent() {
    return( 
        <>
        <section className="skills">
            <div className="skills__category">
              <div className="skills__block">
                <h2 className="skills__block-titulo">Backend</h2>
                <div className="skills__block-items">
                  <img src="java.webp" className="skills__item" alt="logo_java"/>
                  <img src="spring-boot.webp" className="skills__item" alt="logo_springBoot"/>
                </div>
              </div>
              <div className="skills__block">
                <h2 className="skills__block-titulo">Frontend</h2>
                <div className="skills__block-items-small">
                  <img src="js.webp" title="JavaScript" alt="JavaScript" className="skills__item-small" />
                  <img src="html.webp" title="HTML" alt="HTML" className="skills__item-small" />
                  <img src="css.webp" title="CSS" alt="CSS" className="skills__item-small" />
                  <img src="bootstrap.webp" title="Bootstrap" alt="logo_bootstrap" className="skills__item-small" />
                </div>
              </div>
            </div>
            <div className="skills__category">
              <div className="skills__block">
                <h2 className="skills__block-titulo">DB</h2>
                <div className="skills__block-items">
                  <img src="mysql.webp" alt="logo_MySQL" className="skills__item" />
                  <img src="sql.webp" alt="logo__sql" className="skills__item" />
                </div>
              </div>
              <div className="skills__block">
                <h2 className="skills__block-titulo">Herramientas</h2>
                <div className="skills__block-items-small">
                  <img src="git.webp" title="git" alt="logo_git" className="skills__item-small"/>
                  <img src="docker.webp" title="docker" alt="logo_docker" className="skills__item-small"/>
                  <img src="intelliJ.webp" title="IntelliJ IDEA" alt="logo_IntelliJ_IDEA" className="skills__item-small"/>
                  <img src="vs code.webp" title="Visual Studio Code" alt="logo_VSCode" className="skills__item-small"/>
                </div>
              </div> 
            </div>
            <div className="skills__all-block">
              <h2 className="skills__block-titulo">Aprendiendo...</h2>
              <div className="skills__block-aprendiendo"> 
                <img src="microservicios2.webp" title="ReackJS" alt="logo ReactJs" className="skills__item-small"/>
                <img src="reactjs.webp" title="ReactJS" alt="logo ReactJs" className="skills__item-small"/>
                <img src="aws.webp" title="Amazon Web Services" alt="logo AWS" className="skills__item-small"/>
                <img src="postgresql.webp" title="PostgreSQL" alt="logo PostgreSQL" className="skills__item-small"/>
                 <p className="skills__item-small" style={{textAlign: 'center', color: 'red'}}>Arquitectura hexagonal</p>              </div>
            </div>
          </section>
        </>
    )
}