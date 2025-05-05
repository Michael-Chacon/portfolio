import "./SkillsComponent.css"
import { skills } from "../data/skills.json"

export function SkillsComponent() {
  return (
    <>
      <section className="skills">
        <div className="skills__category">
          <div className="skills__block">
            <h2 className="skills__block-titulo">Backend</h2>
            <div className="skills__block-items">
              {skills?.filter((skill) => skill.category === "backend")
              .map((skill) => (
                <img key={skill.id} src={skill.src} className="skills__item" alt={skill.alt} title={skill.title}/>
              ))}
            </div>
          </div>
        </div>
        <div className="skills__category">
          <div className="skills__block">
            <h2 className="skills__block-titulo">Database</h2>
            <div className="skills__block-items">
              {skills?.filter((skill) => skill.category === "database")
              .map((skill) => (
                <img key={skill.id} src={skill.src} className="skills__item" alt={skill.alt} title={skill.title}/>
              ))}
            </div>
          </div>
        </div>
        <div className="skills__category">
          <div className="skills__block">
            <h2 className="skills__block-titulo">Tools</h2>
            <div className="skills__block-items">
              {skills?.filter((skill) => skill.category === "tools")
              .map((skill) => (
                <img key={skill.id} src={skill.src} className="skills__item" alt={skill.alt} title={skill.title}/>
              ))}
            </div>
          </div>
        </div>
        <div className="skills__category">
          <div className="skills__block">
            <h2 className="skills__block-titulo">Frontend</h2>
            <div className="skills__block-items">
              {skills?.filter((skill) => skill.category === "frontend")
              .map((skill) => (
                <img key={skill.id} src={skill.src} className="skills__item" alt={skill.alt} title={skill.title}/>
              ))}
            </div>
          </div>
        </div>
        <div className="skills__category">
          <div className="skills__block">
            <h2 className="skills__block-titulo">Learning</h2>
            <div className="skills__block-items">
              {skills?.filter((skill) => skill.category === "moreTools")
              .map((skill) => (
                <img key={skill.id} src={skill.src} className="skills__item" alt={skill.alt} title={skill.title}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}