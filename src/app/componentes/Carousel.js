export function Carousel() {
    return (
        <div className="mt-4">
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ width: '400px', height: '500px', objectFit: 'cover' }} src="https://gf.lnwfile.com/_/gf/_raw/ay/6n/c3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img style={{ width: '400px', height: '500px', objectFit: 'cover' }} src="https://www.technologychaoban.com/wp-content/uploads/2017/03/%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%AD%E0%B8%81.jpg1_.jpg%E0%B9%80.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item ">
                        <img style={{ width: '400px', height: '500px', objectFit: 'cover' }} src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1507096761/attached_image_th/%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%82%E0%B8%A2%E0%B8%8A%E0%B8%99%E0%B9%8C%E0%B8%94%E0%B8%B5-%E0%B9%86-%E0%B8%95%E0%B9%88-pobpad.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}