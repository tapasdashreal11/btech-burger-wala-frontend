import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import "../../styles/table.scss";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];

  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Staus</th>
              <th>Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td>{"7657889w98y"}</td>
              <td>Packaging</td>
              <td>2</td>
              <td>₹2300</td>
              <td>UPI</td>
              <td>
                <Link to={`/order/${"7657889w98y"}`}>
                  <AiOutlineEye />
                </Link>
              </td>
            </tr> */}
            {arr.map((i) => (
              <tr>
                <td>{i}</td>
                <td>Packaging</td>
                <td>2</td>
                <td>₹2300</td>
                <td>UPI</td>
                <td>
                  <Link to={`/order/${i}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
