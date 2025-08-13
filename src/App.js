import { BrowserRouter, Routes , Route } from "react-router-dom";
import Header from "./compenents/header";
import Acceuil from "./pages/acceuil";
import Apropos from "./pages/apropos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/about" element={<Apropos />} /> 
      </Routes>
    </BrowserRouter>
  );
}
export default App;
