import "./header.css";
import "../images/car_red.png";
import Navbar from '../navbar/Navbar'

function App() {
  return (
    <>
      <section className="section-header">
        <Navbar/>
        <div className="welcome-text">
          <h1>CAR</h1>
          <p>CARS AND RIZWAN</p>
          <a href="link">Book Appointment</a>
        </div>
      </section>
    </>
  );
}

export default App;
