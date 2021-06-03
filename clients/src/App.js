import { Route, Switch } from 'react-router-dom';
import ProductContainer from './features/products/ProductContainer';
import SignUp from './features/user/SignUp';
import AddNewProduct from './features/products/AddNewProduct';
import Login from './features/user/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './features/user/UsersSlice';
import Dashboard from './components/Dashboard';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = sessionStorage.getItem('jwtToken');
    if (!token || token === '') {
      return;
    }
    console.log('rel', token);

    dispatch(getCurrentUser(token)).then((response) => {
      if (!response.error) {
        console.log('success');
      } else {
        sessionStorage.removeItem('jwtToken');
        console.log('failed');
      }
    });
  });

  return (
    <>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/products" exact component={ProductContainer} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/login" exact component={Login} />
        <Route path="/create" exact component={AddNewProduct} />
      </Switch>
    </>
  );
}

export default App;
