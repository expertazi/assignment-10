import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componets/Pages/Home/Home";
import Contact from "./componets/Pages/Contact/Contact";
import NotFound from "./componets/Pages/NotFound/NotFound";
import Header from "./componets/Header/Header";
import MedicineDeta from "./componets/Pages/MedicineDetails/MedicineDeta";
import Login from "./componets/Pages/Login/Login";
import SignUp from "./componets/Pages/SignUp/SignUp";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./componets/Pages/Login/PrivateRoute/PrivateRoute";
import Footer from "./componets/Footer/Footer";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/medicineData/:medicineData">
              <MedicineDeta></MedicineDeta>
            </PrivateRoute>
            <Route exact path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
