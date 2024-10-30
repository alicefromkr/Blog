import Document, { Head, Html, Main, NextScript } from "next/document";
import { SkipNavLink } from "nextra-theme-docs";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <div className="lined-paper">
            <SkipNavLink styled />
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
