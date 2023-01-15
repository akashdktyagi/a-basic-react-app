import React from 'react';
import axios from 'axios';

export default class EmployeeList extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    axios.get(`http://localhost:9000/employee`)
      .then(res => {
        const employees = res.data;
        this.setState({ employees });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.employees
            .map(employee =>
              <li key={employee.id}>{employee.name}--{employee.age}--{employee.department}--{employee.designation}--{employee.email}--{employee.phone}--{employee.salary}</li>
            )
        }
      </ul>
    )
  }
}