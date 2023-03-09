import React from 'react'

const Services = () => {
  return (
    <section id="services" class="services">
    <div class="container-fluid">

      <div class="section-title">
        <h2>Services</h2>
        <h3>Check our <span>Services</span></h3>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="row">
            <div class="col-lg-6 col-md-6 icon-box">
              <div class="icon"><i class="ri-pie-chart-line"></i></div>
              <h4 class="title"><a href="">Sale</a></h4>
              <p class="description">Fulfilling the needs of every indivitual ride since 1965. From manual to electric hybrid bikes</p>
            </div>
            <div class="col-lg-6 col-md-6 icon-box">
              <div class="icon"><i class="ri-stack-line"></i></div>
              <h4 class="title"><a href="">Repair and maintenance</a></h4>
              <p class="description">Have specialised worker for different types of bikes.From Repairing a electric bike to a kids tricycle </p>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Services