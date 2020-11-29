import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import './App.css';
import { HomePage } from './pages/homepage/homepage.component.jsx'
import { ShopPage } from './pages/shop/shop.component.jsx'
import { AuthPage } from './pages/auth/auth.component.jsx'
import Header from './components/header/header.component.jsx'
import { ReactComponent } from './assets/crown.svg';
import { auth } from './firebase/firebase.utils.js'
import { createUserProfileDocument } from './firebase/firebase.utils.js'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions.js'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(null)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path="/auth" render={ () => {
            return this.props.currentUser ? (
              <Redirect to='/'></Redirect>
            ) : (
              <AuthPage></AuthPage>
            )
          }}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);