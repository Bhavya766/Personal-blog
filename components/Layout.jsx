import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchBar from "./SearchBar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Sarcastic Guy</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <nav className="navbar">
        <Navbar />
      </nav>
      <SearchBar />
      <main className="main">
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default Layout;
