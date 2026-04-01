import './Carousel.css';

function Carousel() {
return ( <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-inner">

            <div className="carousel-item active">
                <img src="/images/Carousel_img/Carousel_001.jpg" className="d-block w-100" alt="Slide 1" />
            </div>

            <div className="carousel-item">
                <img src="/images/Carousel_img/Carousel_002.png" className="d-block w-100" alt="Slide 2" />
            </div>

            <div className="carousel-item">
                <img src="/images/Carousel_img/Carousel_003.png" className="d-block w-100" alt="Slide 3" />
            </div>

            <div className="carousel-item">
                <img src="/images/Carousel_img/Carousel_004.png" className="d-block w-100" alt="Slide 4" />
            </div>

            <div className="carousel-item">
                <img src="/images/Carousel_img/Carousel_005.png" className="d-block w-100" alt="Slide 5" />
            </div>

            <div className="carousel-item">
                <img src="/images/Carousel_img/Carousel_006.jpg" className="d-block w-100" alt="Slide 6" />
            </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>

    </div>
);

}


export default Carousel; 
