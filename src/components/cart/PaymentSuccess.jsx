import { Link } from "react-router-dom";
import "../../styles/paymentSuccess.scss";

const PaymentSuccess = () => {
  return (
    <section className="paymentSuccess">
      <main>
        <h1>Order Confirmed</h1>
        <p>Order placed successfully, you can check the order status below.</p>
        <Link to="/my-orders">Check Status</Link>
      </main>
    </section>
  );
};

export default PaymentSuccess;
