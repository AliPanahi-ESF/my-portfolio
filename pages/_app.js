import { useState } from "react";
import "../styles/globals.css";
import Preloader from "../components/Preloader";

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
