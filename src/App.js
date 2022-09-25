import './App.css';
import Header from './header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import CarService from "./services/CarService";
import NewsLetter from "./newsletter/NewsLetter";
import CarFooter from "./footer/CarFooter";
import WhyChooseUs from "./wcu/WhyChooseUs";

function App() {
  return (
    <>
      <Header/>
      <CarService />
      <WhyChooseUs />
      <NewsLetter />
      <CarFooter />
    </>
  );
}

export default App;
