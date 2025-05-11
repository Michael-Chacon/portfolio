import "./Hobbies.css"

export function Hobbies() {
    const images = [
        'Mari.jpg',
        'Oreo1.jpg',
        'Oreo2.jpg',
        'Oreo3.jpg',
        'Oreo4.jpg',
        'Oreo5.jpg',
        'Oreo6.jpg',
        'Oreo7.jpg',
        'Oreo8.jpg',
        'roble.jpg',
    ]

    return (
        <section className="hobbies">
            <h2 className="hobbie__title">Hobbies</h2>
            <div className="hobbies__container">
                <div className="hobbie__cart">
                    <h3><i class='bx bxs-film'></i> Cinéfilo</h3>
                    <p>Soy cinéfilo y disfruto especialmente las películas y series con temáticas científicas que despiertan mi curiosidad.</p>
                </div>
                <div className="hobbie__cart">
                    <h3><i class='bx bx-podcast'></i> Podcast</h3>
                    <p>Me gusta escuchar podcasts, especialmente mientras realizo oficios manuales. Disfruto los de humor, ciencia y también entrevistas en inglés</p>
                </div>
                <div className="hobbie__cart">
                    <h3><i class='bx bx-football' ></i> Microfutbol</h3>
                    <p>Disfruto jugar microfútbol con mis amigos, es una de mis actividades favoritas para liberar estrés y mantenerme en movimiento.</p>
                </div>
            </div>
            <hr />
            <h2 className="hobbie__title">Galería</h2>
            <section className="hobbies__gallery">
                {images.map(image => (
                    <img key={image} className="gallery__image" alt={image} src={`galery/${image}`} />
                ))}
            </section>
        </section>
    )
}