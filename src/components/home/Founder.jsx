import { motion } from "framer-motion";
import "../../styles/founder.scss";
import me from "../../assets/wp.jpg";

const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder's pic" height={200} width={200} />
        <h3>Tapas Dash</h3>
        <p>Hello everyone, I am the founder of Btech Burger wala</p>
        <br />
        <p>
          Our burgers are made with 100% fresh, never frozen chicken and grilled
          to perfection. Each burger is served on a toasted bun with a variety
          of toppings to choose from, including lettuce, tomato, onion, pickles,
          cheese, and our special sauce.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
