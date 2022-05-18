import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import your route components too
import Home from "./Home";
import Repositories from "./Repositories";

export default function Rotas(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </BrowserRouter>
  );
}