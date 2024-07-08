import Image from "next/image";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
 <div className="container-fluid">
<div className="row">
  <div className="col-md-12 text-center p-0">
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">CR7</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="http://localhost:3000/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://th.wikipedia.org/wiki/%E0%B8%84%E0%B8%A3%E0%B8%B4%E0%B8%AA%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B8%A2%E0%B9%82%E0%B8%99_%E0%B9%82%E0%B8%A3%E0%B8%99%E0%B8%B1%E0%B8%A5%E0%B9%82%E0%B8%94" target="_blank">History</a>
        
        
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.transfermarkt.com/cristiano-ronaldo/erfolge/spieler/8198" target="blank">Trophy</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.transfermarkt.com/cristiano-ronaldo/nationalmannschaft/spieler/8198" target="blank">National team</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <button className="btn btn-outline-success" type="submit">Sign in</button>
        <button className="btn btn-outline-success" type="submit">Sign Up</button>
      </form>
    </div>
  </div>
</nav>
  </div>
</div>

<div className="row">
  <div className="col-md-12 text-center p-0">
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://wallpapers.com/images/hd/cristiano-ronaldo-cr7-nike-uoeeyk3ouu4lehye.webp" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://inwfile.com/s-gf/omq9k0.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://image.dogilike.com/shareimg/contentimg/2021/meaw/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89/29092021/iStock-953069774.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>
</div>
ิ<br></br>

<div className="row">
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Cristiano Ronaldo</h5>
        <p className="card-text">history in Cristiano Ronaldo</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Trophy</h5>
        <p className="card-text">Cristiano Ronaldo trophy</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div className="col-sm-4 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">National team</h5>
        <p className="card-text">National team</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
<br></br>
<div className="row">
          <div className="col-md-12 text-center bg-white p-5">
          <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-body-secondary">  Cristiano Ronaldo</p>
    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
    </a>
    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="https://www.facebook.com/Cristiano/?locale=th_TH" target="blank" className="nav-link px-2 text-body-secondary">Facebook</a></li>
      <li className="nav-item"><a href="https://www.instagram.com/cristiano/" target="blank" className="nav-link px-2 text-body-secondary">instagram</a></li>
      <li className="nav-item"><a href="https://x.com/cristiano" target="blank" className="nav-link px-2 text-body-secondary">Twitter</a></li>
      <li className="nav-item"><a href="https://www.nike.com/th/men?cp=54836035612_search_%7Cth%7CCore+Brand+-+Core+Brand+-+General+-+TH_TH%7CGOOGLE%7Cnike&gad_source=1&ds_rl=1300698&gclid=EAIaIQobChMI1vHV2tOWhwMVFSeDAx1Wkwk-EAAYASAAEgKmRfD_BwE&gclsrc=aw.ds" target="blank" className="nav-link px-2 text-body-secondary">Brand ambassador</a></li>
       </ul>
  </footer>
</div>
          </div>
</div>
</div>
    </>
  );
}
