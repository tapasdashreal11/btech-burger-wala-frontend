import "../../styles/cart.scss";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, img, increment, decrement }) => {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="cart item" />
      </div>
      <div>
        <button onClick={increment}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={decrement}>+</button>
      </div>
    </div>
  );
};

const Cart = () => {
  const increment = () => {};
  const decrement = () => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Chicken Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Double Chicken Cheese Burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Double Chicken Cheese Burger with French Fries"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{579}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{579 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{47}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{579 + 579 * 0.18 + 47}</p>
          </div>

          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
