import "../../styles/shipping.scss";
import { Country, State, City } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form>
          <div>
            <label>H.No.</label>
            <input
              type="text"
              placeholder="Enter Complete address and house number"
            />
          </div>
          <div>
            <label>City</label>
            <input type="text" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>
            <select>
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((country) => (
                  <option value={country.isoCode} key={country.isoCode}>
                    {country.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>
            <select>
              <option value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((state) => (
                  <option value={state.isoCode} key={state.isoCode}>
                    {state.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pincode</label>
            <input type="text" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Contact Number</label>
            <input type="text" placeholder="Enter contact number" />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};
export default Shipping;
