
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/login/LoginPage";



function App() {
  return (
    <BrowserRouter>
       <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
     
  
  );
}

export default App;
