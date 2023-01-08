import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const CallbackPage = () => {
  const { error } = useAuth0();

  if (error) {
    return (
      <div>
        <Navbar />
        <h1 id="page-title">
          Error
        </h1>
        <p id="page-description">
          <span>{error.message}</span>
        </p>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );


};