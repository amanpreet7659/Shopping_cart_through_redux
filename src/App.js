import logo from './logo.svg';
import './assets/css/App.css';
import Hedder from './Component/Hedder';
import { Front_window } from './Component/Front_window';
import Product_Window from './Component/Product_Window';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CartItems from './Component/CartItems';
import LoginPage from './Component/LoginPage';

function App() {
  return (
    <div className="App">
      {/* <Hedder/> */}
      <BrowserRouter>
        {/* <Front_window /> */}
        <Switch>
          <Route path="/" exact component={Front_window}></Route>
          <Route path="/CartItems" exact component={CartItems}></Route>
          <Route path="/Product_Window" exact component={Product_Window}></Route>
          {/* <Route path="/LoginPage" exact component={LoginPage}></Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
