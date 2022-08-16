
import '../styles/website_style.css';
import Layout from "./comp/Layout";
function MyApp({ Component, pageProps }) {
  return (
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
   
  );
}

export default MyApp;
