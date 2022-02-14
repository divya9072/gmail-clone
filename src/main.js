import "./App.css";
import Header from "./components/Navbar/header";
import Sidebar from "./components/SidebarSection/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mail from "./components/Mail/mail";
import Emaillist from "./components/EmailList/Emaillist";

const Main=()=> {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Emaillist />} />
            <Route path="/mail" element={<Mail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default Main;
