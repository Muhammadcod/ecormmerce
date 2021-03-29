import { Route, Switch } from 'react-router-dom';
import ProductContainer from './features/products/ProductContainer';
import SignUp from './features/user/SignUp';
import AddNewProduct from './features/products/AddNewProduct';

// import AddNewProduct from './features/products/AddNewProduct';

function App() {
  return (
    <div className="App container">
      <Switch>
        <Route path="/" exact component={ProductContainer} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/create" exact component={AddNewProduct} />
      </Switch>
    </div>
  );
}

export default App;
