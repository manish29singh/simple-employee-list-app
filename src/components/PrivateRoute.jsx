import React from "react"
import { Route, Redirect } from "react-router-dom"
import Header from "./Header"

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return localStorage.getItem("user") ? (
        <>
          <Header />
          <Component {...props} />
        </>
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }}
  />
)

export default PrivateRoute
