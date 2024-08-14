import { Outlet } from "react-router-dom";
import NavBr from "./page/NavBr/NavBr";
import Footer from "./page/Footer/Footer";

function App() {
  return <>
   <NavBr />
   <Outlet />
   <Footer />
  </>;
}

export default App;
