import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage";
// import Eyeglasses from "./components/onclick/Eyeglasses";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>     
              <Route path="/" element={<CheckoutPage />} />
              {/* <Route path="/eyeglasses" element={<Eyeglasses />} /> */}
      </Routes>
    </div>
  );
}

export default App;