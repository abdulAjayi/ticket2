import FormPage from "./pages/formPage";
import LandingPage from "./pages/LandingPage";
import Ticket from "./pages/TicketPage";



import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Form" element={<FormPage />} />
        <Route path="/Ticket" element={<Ticket />} />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
