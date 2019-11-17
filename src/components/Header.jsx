import React from "react"
import { connect } from "react-redux"
import * as AuthActions from "../actions/AuthActions"

function Header(props) {
  const onLogout = () => {
    props.onLogout()
    localStorage.removeItem("user")
  }
  return (
    <header>
      <span className="logout" onClick={onLogout}>Logout</span>
    </header>
  )
}

const mapDispatchToProps = dipatch => ({
  onLogout: () => dipatch(AuthActions.onLogout())
})

export default connect(
  null,
  mapDispatchToProps
)(Header)
