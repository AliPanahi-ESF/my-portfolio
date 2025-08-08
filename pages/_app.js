// pages/_app.js (Keep this code)

import "@/styles/globals.css";
import dynamic from "next/dynamic";

const LayoutWithNoSSR = dynamic(
  () => import("../components/Layout"),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return (
    <LayoutWithNoSSR>
      <Component {...pageProps} />
    </LayoutWithNoSSR>
  );
}