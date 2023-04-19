import './App.css';
import CartContextProvider from './components/CartContext';
import Checkout from './components/Checkout';
import Mainpage from './components/Mainpage';
import Mobiles from './components/Mobiles';
import Navbar from './components/Navbar';
import Placeorder from './components/Placeorder';
import {BrowserRouter as Router,Routes,Switch,Route,Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/"
          element={<Mainpage />}
          />
          <Route path="/mobiles"
          element={<Mobiles />}
          />
          <Route path="/order/:id"
          element={<Placeorder />}
          />
          <Route path="/checkout"
          element={<Checkout />}
          />
        </Routes>
      </CartContextProvider>
    </div>
    </Router>
  );
}

export default App;
