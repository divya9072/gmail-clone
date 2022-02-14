import "./App.css";
import Login from "./Pages/login";
import Loginpage from "./Pages/loginpage";
import Header from "./components/Navbar/header";
import Sidebar from "./components/SidebarSection/sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Mail from "./components/Mail/mail";
import Emaillist from "./components/EmailList/Emaillist";
import Register from "./Pages/register";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Emaillist />
            </div>
          </Route>
          <Route path="/mail">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Mail />
            </div>
          </Route>
          <Route path="/homepage">
            <div>
              <Login />
            </div>
          </Route>
          <Route path="/login">
            <div className="app__body">
              <Loginpage />
            </div>
          </Route>
          <Route path="/register">
            <div className="">
              <Register />
            </div>
          </Route>
        </Switch>
      </Router>
      
    </div>
    // <div className="app">
    //   <Header />
    //   <div className="app__body">
    //     <Sidebar />
    //     <BrowserRouter>
    //       <Routes>
    //         <Route exact path="/" element={<Emaillist />} />
    //         <Route path="/mail" element={<Mail />} />
    //         <Route path="/homepage" element={<Login/>} />
    //         <Route path="/login" element={<Loginpage />} />
    //       </Routes>
    //     </BrowserRouter>
    //   </div>
    // </div>
  );
};

export default App;
