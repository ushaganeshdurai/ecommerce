import  Layout  from "../components/Layout";
import styles from "../Globals.module.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
