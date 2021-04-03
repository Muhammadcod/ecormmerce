import { Route, Switch } from 'react-router-dom';
import ProductContainer from './features/products/ProductContainer';
import SignUp from './features/user/SignUp';
import AddNewProduct from './features/products/AddNewProduct';
import Login from './features/user/Login';

// import AddNewProduct from './features/products/AddNewProduct';

function App() {
  return (
    <div className="App container">
      <Switch>
        <Route path="/" exact component={ProductContainer} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/create" exact component={AddNewProduct} />
      </Switch>
    </div>
  );
}

export default App;
