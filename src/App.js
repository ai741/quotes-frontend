import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import Category from "./pages/Category/Category";
import RandomQuote from "./pages/RandomQuote/RandomQuote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />

      <Route path="/category" element={<Category />} />
      <Route path="/random" element={<RandomQuote/>}/>
      
    </Routes>
  );
}

export default App;
