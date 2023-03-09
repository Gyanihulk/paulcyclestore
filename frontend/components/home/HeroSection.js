import { Carousel } from 'react-bootstrap'
import React from 'react'

const HeroSection = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'100vh'}}
          src="https://wallpapercave.com/wp/wp3001015.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'100vh'}}
          src="https://wallpapercave.com/download/bicycle-wallpaper-wp2813259"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" style={{height:'100vh'}}
          src="https://wallpapercave.com/download/bicycle-wallpaper-wp2813222"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


//     <section id="hero">
//     <div id="heroCarousel" data-bs-interval="5000" class="carousel slide carousel-fade" data-bs-ride="carousel">

//       <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>

//       <div class="carousel-inner" role="listbox">


//         <div class="carousel-item active" style={{backgroundImage: 'url(public/assets/img/slide/slide-1.jpg)'}}>
//           <div class="carousel-container">
//             <div class="container">
//               <h2 class="animated fadeInDown">Welcome to <span>Hidayah</span></h2>
//               <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
//               <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
//             </div>
//           </div>
//         </div>

//  {/*
//         <div class="carousel-item" style={{backgroundImage: 'url(public/assets/img/slide/slide-1.jpg)'}}>
//           <div class="carousel-container">
//             <div class="container">
//               <h2 class="animated fadeInDown">Lorem Ipsum Dolor</h2>
//               <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
//               <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
//             </div>
//           </div>
//         </div>

 
//         <div class="carousel-item" style="background-image: url(assets/img/slide/slide-3.jpg)">
//           <div class="carousel-container">
//             <div class="container">
//               <h2 class="animated fadeInDown">Sequi ea ut et est quaerat</h2>
//               <p class="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
//               <a href="#about" class="btn-get-started animated fadeInUp scrollto">Read More</a>
//             </div>
//           </div>
//         </div> */}

//       </div>

//       <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
//         <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
//       </a>
//       <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
//         <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
//       </a>

//     </div>
//   </section>
  )
}

export default HeroSection