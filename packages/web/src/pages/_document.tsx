import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className="h-full"
        style={{
          background: "linear-gradient(90deg,#f4f4f4 48px,white 48px)",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
