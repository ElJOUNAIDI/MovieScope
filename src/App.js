import { BrowserRouter, Routes , Route } from "react-router-dom";
import Header from "./compenents/header";
import Acceuil from "./pages/acceuil";
import Apropos from "./pages/apropos";
import Footer from "./compenents/Footer";
import Movie from "./pages/movie";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/about" element={<Apropos />} /> 
        <Route path="/movies" element={<Movie />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
