import React from "react";
import { Link } from "react-router-dom";
import '../styles/style_index.css';
import '../styles/style_barra.css';

const Index = ()=> {
    return(
<div>
  {/*NAV O BARRA DE NAVEGACIÓN*/}
  <nav className="border-gray-200 px-4 lg:px-6 py-2.5 navbar_gradient  ">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <div className="flex items-center">
        <div className="w-12 h-12 mr-4">
          <img className="w-full h-f
ull object-contain" src="https://i.ibb.co/m92z5kN/Fondo-mila-removebg-preview.png" alt="Logo" />
        </div>
        <p className="block py-2 pr-4 pl-3 text-black italic border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-500 font-semibold text-gray-800 transition-all duration-300">Mila - GastroFusion</p>
      </div>
      <div className="flex items-center lg:order-2">
        <a href="./login.html" className="text-gray-800 hover:bg-white focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 border-0 no-underline">Iniciar sesión</a>
        <a href="./Formulario_registro/Formulario_registro.html" className="text-white bg-yellow-400 hover:bg-purple-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 no-underline">Registrarse</a>
        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
        <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0">
          <li>
            <Link href="index.html" className="block py-2 px-4 text-gray-700 transition-colors duration-300 hover:text-yellow-600 hover:bg-yellow-100 rounded-lg no-underline">Inicio</Link>
          </li>
          <li>
            <button className="block py-2 px-4 text-gray-700 transition-colors duration-300 hover:text-yellow-600 hover:bg-yellow-100 rounded-lg">Productos</button>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 text-gray-700 transition-colors duration-300 hover:text-yellow-600 hover:bg-yellow-100 rounded-lg no-underline">Servicios</Link>
          </li>
          <li>
            <Link to="#" className="block py-2 px-4 text-gray-700 transition-colors duration-300 hover:text-yellow-600 hover:bg-yellow-100 rounded-lg no-underline">Nosotros</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <section className="mt-12 ">
    {/*CARRUSEL*/}
    <div className="container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://baresycocteles.com/wp-content/uploads/2023/04/1000x700-cocktaillilili.jpg" className="d-block w-100 carousel-img" alt="..." />
            <div className="carousel-caption d-none d-md-block mt-64">
              <h5>Cocteleria - Bar</h5>
              <p>Somos un bar de lunes a domingo de 6 a 11 pm</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdn.hellofresh.com/es/cms/SEO/recipes/gourmet/entrecot-de-ternera.jpeg" className="d-block w-100 carousel-img" alt="..." />
            <div className="carousel-caption d-none d-md-block mt-64">
              <h5>Restaurante gourmet</h5>
              <p>Tenemos variedad de platos gourmet que se ajustaran a tus gustos</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://1033609670.rsc.cdn77.org/c5b7-Pub-and-bar-Mila-Gastro-Fusion-interior.jpg" className="d-block w-100 carousel-img" alt="..." />
            <div className="carousel-caption d-none d-md-block mt-64">
              <h5>Reservas</h5>
              <p>Podras alquilar el local o mesa segun sea la ocasion que deseas</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    {/* SOBRE NOSOTROS */}
    <div className="container-fluid py-5">
      <div className="container">
        <div className="section-title">
          <h4 style={{letterSpacing: 5, color: 'rgb(0, 0, 0)'}}><b>Sobre Nosotros</b></h4>
          <h1 className="display-4"><b>Sirviendo desde 2018</b></h1>
        </div>
        <div className="row">
          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3">Nuestra Mision</h1>
            <p>En Luz Mila gastro fusión, nuestra misión es ofrecer una experiencia gastronómica única que combina la tradición culinaria con la innovación moderna. Nos comprometemos a utilizar ingredientes frescos y locales, preparados con pasión y creatividad, para deleitar a nuestros clientes con platos que celebran la riqueza de la cocina regional e internacional. Buscamos crear un ambiente acogedor y sofisticado donde cada visita sea memorable y cada plato cuente una historia.</p>
          </div>
          <div className="col-lg-4 py-5 py-lg-0" style={{minHeight: 500}}>
            <div className="position-relative h-100">
              <img className="position-absolute w-100 h-100" src="about.png" style={{objectFit: 'cover'}} alt=""/>
            </div>
          </div>
          <div className="col-lg-4 py-0 py-lg-5">
            <h1 className="mb-3">Nuestra Vision</h1>
            <p>Ser reconocidos como el gastrobar de referencia en nuestra comunidad, famoso por nuestra cocina excepcional, nuestro servicio al cliente impecable y nuestro compromiso con la sostenibilidad. Aspiramos a expandir nuestra marca y abrir nuevas ubicaciones, manteniendo siempre nuestros valores de calidad y excelencia. Queremos ser un lugar donde las personas se reúnan para celebrar momentos especiales y disfrutar de una experiencia culinaria inigualable.</p>
            <h5 className="mb-3"><i className="fa fa-check text-primary mr-3" />Los mejores servicios</h5>
            <h5 className="mb-3"><i className="fa fa-check text-primary mr-3" />La mejor calidad en nuestras comidas</h5>
          </div>
        </div>
      </div>
    </div>
    {/*SERVICIOS*/}
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title mb-5">
          <h4 className="text-black" style={{letterSpacing: 5}}>Nuestros Servicios</h4>
          <h1 className="display-4">Comida Fresca &amp; Natural</h1>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <img className="img-fluid mb-3 mb-sm-0" src="https://www.gourmet4life.com/image0428/70/70a3374ddd938d72a290968b7c4321bc.jpg" alt="Organización de Eventos" />
              </div>
              <div className="col-sm-7">
                <h4><i className="fa fa-calendar service-icon" /> Organización de Eventos</h4>
                <p className="m-0">En Mila, ofrecemos un servicio de organización de eventos para hacer de tu ocasión especial un momento inolvidable. Nos encargamos de todos los detalles para que tú puedas disfrutar.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <img className="img-fluid mb-3 mb-sm-0" src="data:image/jpeg;base64,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" alt="Reservas" />
              </div>
              <div className="col-sm-7">
                <h4><i className="fa fa-book service-icon" /> Reservas</h4>
                <p className="m-0">Facilitamos el proceso de reservas para que siempre tengas un lugar en nuestro restaurante. Ya sea para una cena con tu pareja o una reunión familiar, puedes reservar con antelación.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <img className="img-fluid mb-3 mb-sm-0" src="https://media.istockphoto.com/id/1324465031/es/foto/vista-de-alto-%C3%A1ngulo-close-up-mujer-asi%C3%A1tica-usando-servicio-de-entrega-de-comidas-ordenando.jpg?s=612x612&w=0&k=20&c=9rMPE2IoJIE3virjkcK-2D60-0KgQiJsfNEjeBvcn5s=" alt="Pedidos" />
              </div>
              <div className="col-sm-7">
                <h4><i className="fa fa-bullhorn service-icon" /> Pedidos</h4>
                <p className="m-0">Realiza tus pedidos de manera rápida y sencilla a través de nuestro sistema en línea. Ofrecemos un servicio eficiente para que disfrutes de tus comidas favoritas sin complicaciones.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <img className="img-fluid mb-3 mb-sm-0" src="https://aishlatino.b-cdn.net/wp-content/uploads/2021/11/Como-sobrevivir-las-reuniones-familiares-910x512-SP.jpg" alt="Disfruta con la Familia" />
              </div>
              <div className="col-sm-7">
                <h4><i className="fa fa-utensils service-icon" /> Disfruta con la Familia</h4>
                <p className="m-0">En Mila, queremos que disfrutes momentos especiales con tu familia. Nuestro ambiente acogedor y nuestro menú variado son perfectos para pasar tiempo de calidad juntos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* MAPA DE MILA */}
    <div className="container my-4">
      <center><h1 className="display-4">Donde Nos Encontramos</h1></center><br /><br />
      <div className="row">
        {/* Mapa incrustado */}
        <div className="col-md-8 mb-3">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7467456711715!2d-74.06769082538494!3d4.639206095335593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a3a7f05c507%3A0xaec53f454f5a6c77!2zS3IgMTMgIzUyLTEwLCBCb2dvdMOh!5e0!3m2!1ses-419!2sco!4v1722490572590!5m2!1ses-419!2sco" width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> */}
        </div>
        {/* Tarjeta */}
        <div className="col-md-4">
          <div className="card mb-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWVTW1fMUieArUf22D3HQV50OuBRt51kq9Pw&s" className="card-img-top" alt="imagen card" />
            <div className="card-body">
              <h5 className="card-title" style={{fontFamily: 'coursive'}}>UBICADOS EN CHAPINERO</h5>
              <p className="card-text">Bienvenido a MIla gastro fusion ven con nosotros y pasa un buen momento</p>
              <p className="card-text"><small className="text-body-secondary">RESERVAS: 3124875578</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*FOOTER*/}
  <footer className="footer-area bg-f">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <h3>Porque Nosotros</h3>
          <p>Mila Gastro Fusión se destaca por su innovadora fusión culinaria...</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3>Cuando abrimos</h3>
          <p><span className="text-color">Lunes: </span>Cerrado</p>
          <p><span className="text-color">Mar-Miér :</span> 9:00 AM - 10:00 PM</p>
          <p><span className="text-color">Jue-Vie :</span> 9:00 AM - 10:00 PM</p>
          <p><span className="text-color">Sáb-Dom :</span> 3:00 PM - 10:00 PM</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3>Informacion de Contacto</h3>
          <p className="lead">Carrera 13 #52 - 10, Bogota, Colombia</p>
          <p className="lead"><a href="tel:+573124875578">3124875578</a></p>
          <p><a href="mailto:mila1228@gmail.com">milagastrobar@gmail.com</a></p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3>Redes Sociales</h3>
          <ul className="list-inline f-social">
            <li className="list-inline-item"><Link to="https://www.facebook.com/MilaGastroFusion/" target="_blank"><i className="fa fa-facebook" /></Link></li>
            <li className="list-inline-item"><Link  to="https://www.instagram.com/milagastrofusion/" target="_blank"><i className="fa fa-instagram" /></Link></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="company-name">Todos los derechos reservados. © 2024 <Link href="#">Mila gastrofusion</Link> Design By: Nicolas Fandiño - Nicole Orjuela - Santiago Sanchez - Esteban Trujillo</p>
          </div>
        </div>
      </div>
    </div>
    <div className="icon-content">
      <Link to="https://www.instagram.com/milagastrofusion/" target="_blank" className="icon-link">
        <i className="fa fa-instagram" />
      </Link>
      <Link to="https://www.facebook.com/MilaGastroFusion/" target="_blank" className="icon-link">
        <i className="fa fa-facebook" />
      </Link>
    </div>
  </footer>
  {/* End Footer */}
</div>

    )
}

export default Index;
