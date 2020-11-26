import { Switch, Route } from 'react-router'
import './App.css';
import { HomePage } from './pages/homepage/homepage.component.jsx'
import { ShopPage } from './pages/shop/shop.component.jsx'
import { AuthPage } from './pages/auth/auth.component.jsx'
import { Header } from './components/header/header.component.jsx'

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/auth" component={AuthPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
