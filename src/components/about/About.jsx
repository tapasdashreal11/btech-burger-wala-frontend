import React from "react";
import { RiFindReplaceLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import me from "../../assets/wp.jpg";

import "../../styles/about.scss";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Btech Burger Wala</h4>
          <p>
            We are serving delicious, freshly made burgers recently. We use only
            the highest quality ingredients and pride ourselves on our
            commitment to customer satisfaction.Our burgers are made with 100%
            fresh, never frozen chicken and grilled to perfection. Each burger
            is served on a toasted bun with a variety of toppings to choose
            from, including lettuce, tomato, onion, pickles, cheese, and our
            special sauce.
          </p>
          <p>Explore the juiciest and tastiest burgeres right below</p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="" />
            </div>
            <p>I am Tapas Dash, founder of Btech Burger Wala</p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
