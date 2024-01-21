import { Outlet } from "react-router-dom";
import "./App.css";
import NavItems from "./components/NavItems";
import Footer from "./components/Footer";




export default function App() {
  return (
    <>
    <NavItems />
    <div className="min-vh-100">
     <Outlet />
     </div>
     <Footer />
    </>
  )
}