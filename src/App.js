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
import { AuthProvider } from "./context/auth";
import SendMail from "./components/Send/sendmail";

const App = () => {
  return (
    <AuthProvider>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/main">
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
            <Route exact path="/">
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
            <Route path="/compose">
              <Header />
              <div className="app__body">
                <Sidebar />
                <Emaillist />
              </div>
              <SendMail />
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
