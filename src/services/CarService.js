import "./CarService.css";
import {
  MdSell,
  MdOutlineMiscellaneousServices,
  MdShoppingCart,
} from "react-icons/md";

function CarService() {
  const mystyle = {
    color: "rgba(22, 25, 28, 0.84)",
    padding: "15px",
    marginLeft: "3%",
    textAlign: "start",
    fontSize: "36px",
  };
  return (
    <>
      <section className="sec-service">
        <div className="service-container">
          <h1 style={mystyle}>Services We Offer</h1>
          <div className="service-layout">
            <div className="service-item">
              <div className="service-icon-container">
                <MdSell className="sell-icon" />
              </div>
              <p>Sell Car</p>
            </div>
            <div className="service-item">
              <div className="service-icon-container">
                <MdOutlineMiscellaneousServices className="service-icon" />
              </div>
              <p>Car Maintenance</p>
            </div>
            <div className="service-item">
              <div className="service-icon-container">
                <MdShoppingCart className="buy-icon" />
              </div>
              <p>Buy Car</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarService;