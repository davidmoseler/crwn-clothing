import { Switch, Route } from 'react-router'
import './App.css';
import { HomePage } from './pages/homepage/homepage.component.jsx'
import { ShopPage } from './pages/shop/shop.component.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
