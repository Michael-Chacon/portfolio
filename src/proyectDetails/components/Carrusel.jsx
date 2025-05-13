import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Carrusel({ images }) {
    const pathDireccition = "../projects/"

    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        initialSlide: 2
    }
    return (
        <article className="carrusel" style={{ maxWidth: '700px', margin: '0 auto' }}>
            <Slider {...settings}>
                {images?.map((image) => (
                    <img key={image} src={pathDireccition + image} className="video" alt={image} />
                ))}
            </Slider>
        </article>
    )
}

export default Carrusel