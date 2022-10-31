import Canvas from "./Canvas";
import Signature from "./Signature";
import "../styles/style.scss";
import LoadingScreen from "./LoadingScreen";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Maria Ines Life Interiors</title>
        <meta
          name="description"
          content="Transforming your personal, living, and working spaces at the intersection between scientific and spiritual interference."
        />
        <meta property="og:title" content="Maria Ines Life Interiors" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mariaineslifeinteriors.com/" />
        <meta property="og:image" content="/images/og-image.png" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="icon"
          sizes="16x16 32x32 64x64"
          href="/favicons/favicon.ico"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="196x196"
          href="/images/favicon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="160x160"
          href="/images/favicon-160.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon-96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/images/favicon-64.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16.png"
        />
        <link rel="apple-touch-icon" href="/images/favicon-57.png" />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/favicon-114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/favicon-72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/favicon-144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/favicon-60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/favicon-120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/favicon-76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/favicon-152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon-180.png"
        />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta
          name="msapplication-TileImage"
          content="/images/favicon-144.png"
        />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body>
        <Canvas>
          <Signature>{children}</Signature>
        </Canvas>
        <LoadingScreen />
      </body>
    </html>
  );
}
