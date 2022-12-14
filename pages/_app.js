
import '../styles/website_style.css';
import Layout from "./comp/Layout";
import GoogleAnalytics from "@bradgarropy/next-google-analytics"

import 'bootstrap-icons/font/bootstrap-icons.css';


function MyApp({ Component, pageProps }) {

  return (
    
      <Layout>
       <GoogleAnalytics measurementId="G-VPM415CRFY" />
       
        <Component {...pageProps} />
      </Layout>
   
  );
}

export default MyApp;
