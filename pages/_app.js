import Layout from "../components/Layout";
import styles from "../Globals.module.css";
import { StateContext } from "../context/StateContext";
import {SessionProvider} from "next-auth/react";


export default function MyApp({ Component, pageProps:{
  session,...pageProps
} }) {
  return (
    <SessionProvider session={session}>
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    </SessionProvider>
  );
}
