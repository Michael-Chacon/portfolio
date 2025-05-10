import "./Certificate.css";

export function Certificate() {
    return (
        <section className="certificate">
            <article className="certificate__card">
                <img src="certificado java.jpg" className="certificate__img" alt="Certificado Java" />
                <div className="certificate__information">
                    <a href="https://www.udemy.com/course/master-completo-java-de-cero-a-experto/" target="_black" className="certificate__link">Ver curso</a>
                    <p className="certificate__technology">Java</p>
                </div>
            </article>
            <article className="certificate__card">
                <img src="certificado spring boot.jpg" className="certificate__img" alt="Certificado Spring boot" />
                <div className="certificate__information">
                    <a href="https://www.udemy.com/course/spring-framework-5/" target="_black" className="certificate__link">Ver curso</a>
                    <p className="certificate__technology">Spring Boot</p>
                </div>
            </article>
            <article className="certificate__card">
                <img src="certificado azure.jpeg" className="certificate__img" alt="Certificado Introduction to Microsoft Azure Cloud Services" />
                <div className="certificate__information">
                    <a href="https://www.coursera.org/account/accomplishments/verify/RU7IVSBDVHTG" target="_blank" className="certificate__link">Ver certificado</a>
                    <p className="certificate__technology">Introduction to Microsoft Azure Cloud Services</p>
                </div>
            </article>
        </section>
    );
}