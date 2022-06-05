//Libraries
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
//Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound"
//Components
import NavBar from "./components/NavBar"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
