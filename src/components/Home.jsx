import React from "react"
import { connect } from "react-redux"

function Home(props) {
  return (
    <div className="pt-5">
      <h1>Employee List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>AGE</th>
            <th>GENDER</th>
            <th>PHONE NO.</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.age}</td>
              <td>{employee.gender}</td>
              <td>{employee.phoneNo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  employees: state.employees.data
})

export default connect(mapStateToProps)(Home)
