import LineChart from "./Line Chart/LineChart";
import Phones from "./Phones";
import NavBar2 from "./component/NavBar2";
import PriceOptions from "./component/Price Options/PriceOptions";
// import Navbar from "./component/navbar";


const App = () => {
  return (
    <div className="">
      <NavBar2></NavBar2>
      {/* <Navbar className="relative"></Navbar> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </div>
  );
};

export default App;