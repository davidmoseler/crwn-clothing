import React from 'react'
import { Switch, Route } from 'react-router'
import './App.css';
import { HomePage } from './pages/homepage/homepage.component.jsx'
import { ShopPage } from './pages/shop/shop.component.jsx'
import { AuthPage } from './pages/auth/auth.component.jsx'
import { Header } from './components/header/header.component.jsx'
import { auth } from './firebase/firebase.utils.js'
import { ReactComponent } from './assets/crown.svg';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => this.setState({currentUser: user}))
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/auth" component={AuthPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
