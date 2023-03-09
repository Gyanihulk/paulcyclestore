import React from "react";

const Testimonials = () => {
  return (
    <>
      <section id="team" class="team">
        <div class="container-fluid">
          <div class="section-title">
            <h2>Testimonials</h2>
            <p>Check what our customers say about us.</p>
          </div>

          <div class="row justify-content-center">
            <div class="col-xl-10">
              <div class="row">
                <div class="col-xl-3 col-lg-4 col-md-6">
                  <div class="member">
                    <img
                      src="assets/img/team/team-1.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="member-info">
                      <div class="member-info-content">
                        <h4>Arjun </h4>
                        <span>Haridwar</span>
                      </div>
                      <div class="social">
                      <a href=""><i class="bi bi-twitter"></i></a>
                      <a href=""><i class="bi bi-facebook"></i></a>
                      <a href=""><i class="bi bi-instagram"></i></a>
                      <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.1s">
                  <div class="member">
                    <img
                      src="assets/img/team/team-2.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="member-info">
                      <div class="member-info-content">
                        <h4>Sarah Jhonson</h4>
                        <span>Product Manager</span>
                      </div>
                      <div class="social">
                        <a href="">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.2s">
                  <div class="member">
                    <img
                      src="assets/img/team/team-3.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="member-info">
                      <div class="member-info-content">
                        <h4>William Anderson</h4>
                        <span>CTO</span>
                      </div>
                      <div class="social">
                        <a href="">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-3 col-lg-4 col-md-6" data-wow-delay="0.3s">
                  <div class="member">
                    <img
                      src="assets/img/team/team-4.jpg"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="member-info">
                      <div class="member-info-content">
                        <h4>Amanda Jepson</h4>
                        <span>Accountant</span>
                      </div>
                      <div class="social">
                        <a href="">
                          <i class="bi bi-twitter"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-facebook"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-instagram"></i>
                        </a>
                        <a href="">
                          <i class="bi bi-linkedin"></i>
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
    </>
  );
};

export default Testimonials;
