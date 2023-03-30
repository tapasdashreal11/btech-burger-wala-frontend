import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/dashboard.scss";
import Loader from "../layout/Loader";

ChartJS.register(Tooltip, ArcElement, Legend);

const Box = ({ value, title }) => (
  <div>
    <h3>
      {title === "Income" && "₹"}
      {value}
    </h3>
    <p>{title}</p>
  </div>
);

const Dashboard = () => {
  const loading = true;
  const data = {
    labels: ["Packaging", "Shipped", "Delivered"],
    datasets: [
      {
        label: "# of orders",
        data: [2, 3, 4],
        backgroundColor: [
          "rgfb(159,63,176,0.1)",
          "rgb(78,63,176,0.1)",
          "rgb(156,0,60,0.1)",
        ],
        border: ["rgfb(159,63,176)", "rgb(78,63,176)", "rgb(156,0,60)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <section className="dashboard">
      {loading === false ? (
        <main>
          <article>
            <Box title="Users" value={200} />
            <Box title="Orders" value={16} />
            <Box title="Income" value={21000} />
          </article>
          <section>
            <div>
              <Link to="/admin/orders">View Orders</Link>
              <Link to="/admin/users">View Users</Link>
            </div>
            <aside>
              <Doughnut data={data} />
            </aside>
          </section>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default Dashboard;
