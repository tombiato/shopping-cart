import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Store from "./pages/Store.tsx";
import Navbar from "./components/Navbar.tsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.tsx";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className={"mb-4"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
