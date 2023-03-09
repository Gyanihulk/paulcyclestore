import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <script src="assets/vendor/purecounter/purecounter_vanilla.js" async ></script>

          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
            rel="stylesheet"
          />

          <link
            href="assets/vendor/animate.css/animate.min.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/boxicons/css/boxicons.min.css"
            rel="stylesheet"
          />
          <link
            href="assets/vendor/glightbox/css/glightbox.min.css"
            rel="stylesheet"
          />
          <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
          <link
            href="assets/vendor/swiper/swiper-bundle.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="public/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" async ></script>
          <script src="public/assets/vendor/glightbox/js/glightbox.min.js" async ></script>
          <script src="public/assets/vendor/isotope-layout/isotope.pkgd.min.js" async ></script>
          <script src="public/assets/vendor/swiper/swiper-bundle.min.js" async ></script>
          <script src="public/assets/vendor/waypoints/noframework.waypoints.js" async ></script>
          <script src="public/assets/vendor/php-email-form/validate.js" async ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
