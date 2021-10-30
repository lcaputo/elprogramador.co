import Head from "next/head";
import styles from "../styles/Home.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastWrapper } from "./contexts/ToastContext";
import Resume from "./components/resume";

export default function Home() {
  return (
    <>
      <Head>
        <title>Laszlo Caputo Programador FullStack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastWrapper>
        <main className={styles.container}>
          <Resume />
        </main>
      </ToastWrapper>
      <style global jsx>{`
        .Toastify__toast--success {
          background: #009696 !important;
        }
        .Toastify__toast--error {
          background: #cc3030 !important;
        }
      `}</style>
    </>
  );
}
