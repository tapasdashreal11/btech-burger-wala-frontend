import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import "../../styles/notFound.scss";

const NotFound = () => {
  return (
    <section className="notFound">
      <main>
        <div>
          <MdError />
          <h1>404</h1>
        </div>
        <p>Page Not Found! Click below to go to Home page</p>
        <Link to="/">Go To Home</Link>
      </main>
    </section>
  );
};

export default NotFound;
