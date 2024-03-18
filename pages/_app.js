import Layout from "../components/Layout";
import styles from "../Globals.module.css";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

export default function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
