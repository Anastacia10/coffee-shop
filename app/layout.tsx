import type { Metadata } from "next";
import { closeMongooseConnection, connectMongooseToDb } from "lib/mongoose";
import { righteousFont, interFont, urbanistFont } from "utils/fonts";
import Footer from "components/footer/footer";
import { NavBar } from "components/nav-bar/nav-bar";
import "styles/globals.scss";

export const metadata: Metadata = {
  title: "Coffe shop",
  description: "Enjoy your morning coffe",
};

connectMongooseToDb();

if (typeof process !== "undefined") {
  process.on("SIGINT", async () => {
    console.log("Graceful shutdown initiated (SIGINT)");
    await closeMongooseConnection();
    process.exit(0);
  });

  process.on("SIGTERM", async () => {
    console.log("Graceful shutdown initiated (SIGTERM)");
    await closeMongooseConnection();
    process.exit(0);
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${urbanistFont.variable} ${righteousFont.variable} ${interFont.variable}`}
    >
      <body>
        <div className="layout">
          <NavBar />
          {children}
        </div>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
