import "../../styles/menu.scss";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={129}
          title="Chicken Cheese Burger"
          handler={addToCartHandler}
          delay={0.2}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={179}
          title="Double Chicken Cheese Burger"
          handler={addToCartHandler}
          delay={0.5}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={219}
          title="Double Chicken Cheese Burger with French Fries"
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
