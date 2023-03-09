import { PageLayout } from "../components/PageLayout";
import { SanityContext } from "../context/SanityContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SanityContext>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </SanityContext>
  );
}

export default MyApp;
