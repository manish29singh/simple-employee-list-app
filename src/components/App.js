import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import { connect } from "react-redux"
import Home from "./Home"
import PrivateRoute from "./PrivateRoute"
import NotFound from "./NotFound"
import "./css/App.css"

function App(props) {
  const { user } = props
  return (
    <Router>
      <div className="App container">
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" render={props => <Login {...props} user={user} />} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}
const mapStateToProps = state => ({
  user: state.userAuth.user
})

export default connect(mapStateToProps)(App)
