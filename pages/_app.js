import Layout from "../components/Layout";
import styles from "../Globals.module.css";
import { StateContext } from "../context/StateContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
