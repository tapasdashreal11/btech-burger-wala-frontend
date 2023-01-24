import "../../styles/orderDetails.scss";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"A dummy street address"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Tapas Dash"}
          </p>
          <p>
            <b>Phone</b>
            {1234567890}
          </p>
          <p>
            <b>Placed At</b>
            {"12-01-20"}
          </p>
          <p>
            <b>Delievered At</b>
            {"12-02-20"}
          </p>
        </div>
        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Methoda</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"12345"}
          </p>
        </div>
        <div>
          <h1>Amount</h1>
          <p>
            <b>Items total</b>₹{2067}
          </p>
          <p>
            <b>Shipping Charges</b>₹{200}
          </p>
          <p>
            <b>Tax </b>₹{36}
          </p>
          <p>
            <b>Total Amount</b>₹{2067 + 200 + 36}
          </p>
        </div>
        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Chicken Cheese Burger</h4>
            <div>
              <span>{3} x </span>
              <span>{129}</span>
            </div>
          </div>
          <div>
            <h4>Double Chicken Cheese Burger</h4>
            <div>
              <span>{2} x </span>
              <span>{179}</span>
            </div>
          </div>
          <div>
            <h4>Double Chicken Cheese Burger with French Fries</h4>
            <div>
              <span>{1} x </span>
              <span>{219}</span>
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 800 }}>Subtotal</h4>
            <div style={{ fontWeight: 800 }}>₹{2033}</div>
          </div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
