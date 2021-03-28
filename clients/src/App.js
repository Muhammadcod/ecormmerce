import { Route, Switch } from 'react-router-dom';
import ProductContainer from './features/products/ProductContainer';

// import AddNewProduct from './features/products/AddNewProduct';

function App() {
  return (
    <div className="App container">
      <Switch>
        <Route path="/" exact component={ProductContainer} />
      </Switch>
    </div>
  );
}

export default App;
