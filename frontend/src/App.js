import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SinglePDetails from './components/Product/SinglePDetails';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Products from './components/Product/Products';  
import PrivatedRoute from './PrivateRoute';
import Cart from './components/Cart/Cart'; 
import Shipping from './components/Checkout/Delivery'; 
import Profile from './components/User/UserProfile';
import Payment from './components/Checkout/Payment';
import Contact from './components/Contact/Contact';
 
//all the routes and the corresponding components are defined
function App() { 
  return (
    <>

      <Router> 
         <Switch>
          <Route exact path="/" component={Home} />  
          <Route exact path="/product/:id" component={SinglePDetails} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />  
          <Route exact path="/products/:keyword" component={Products} />
          <Route exact path="/cart" component={Cart} /> 
          <Route exact path="/contact" component={Contact}/>
          <PrivatedRoute exact path="/user" component={Profile} />
          <PrivatedRoute exact path="/shipping" component={Shipping} />
          <PrivatedRoute exact path="/payment" component={Payment} />
        </Switch>
      </Router>

    </>
  );
}
export default App;