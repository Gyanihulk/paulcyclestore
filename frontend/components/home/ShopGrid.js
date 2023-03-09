import React from "react";
import { useSanityContext } from "../../context/SanityContext";

const ShopGrid = () => {
  const {categories}=useSanityContext()
  return (
    <section id="portfolio" class="portfolio">
      <div class="container-fluid">
        <div class="section-title">
          <h2>Shop</h2>
          <h3>
            Check our <span>Shop</span>
          </h3>
          <p>
            We have more than 1500 bike in stock of more than 25 brands to fulfill your needs and desire both at the same time .
          </p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">
                All
              </li>
              <li>By Brands</li>
              <li>By Categories</li>
            </ul>
          </div>
        </div>

       
        <div class="row portfolio-container justify-content-center">
          <div class="col-xl-10">
            <div class="row">
              <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="App 1"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-web">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-2.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-app">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-3.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-3.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="App 2"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-lg-4 col-md-6 portfolio-item filter-card">
                <div class="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    class="img-fluid"
                    alt=""
                  />
                  <div class="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div class="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gallery="portfolioGallery"
                        class="portfolio-lightbox"
                        title="Card 2"
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i class="bx bx-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopGrid;
