import "../../styles/footer.scss";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Btech Burger Wala</h2>
        <p>
          We are serving delicious, freshly made burgers recently. We use only
          the highest quality ingredients and pride ourselves on our commitment
          to customer satisfaction
        </p>
        <br />
        <em>We give attention to geniune feedback!</em>
        <strong>Copyright &copy; 2023 @btechburgerwala</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/noob_programmer/">
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/tapas-dash-41374a138/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/TapasDash">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
