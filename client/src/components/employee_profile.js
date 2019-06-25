import React, { Component } from 'react';
import EmployeeInfoCard from './employee_info_card';
import PerformanceReviewsContainer from './performance_reviews_container';
import * as api from '../lib/api';

class EmployeeProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: null,
    };
  }

  componentDidMount() {
    this.fetchEmployee(this.props.selectedEmployeeId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedEmployeeId !== prevProps.selectedEmployeeId) {
      this.fetchEmployee(this.props.selectedEmployeeId);
    }
  }

  fetchEmployee = (employeeId) => {
    if (employeeId) {
      api.adminFetchEmployee(employeeId)
        .then(employee => this.setState({ employee }))
        .catch(error => console.log(error));
    }
  }

  clearEmployee = () => {
    this.setState({ employee: null });
  }

  render() {
    const { employee } = this.state;
    const { fetchEmployees, employees } = this.props;
    if (employee) {
      return (
        <div className="employee-profile">
          <div className="section-titles">Employee Information</div>
          <EmployeeInfoCard employee={employee} fetchEmployee={this.fetchEmployee} fetchEmployees={fetchEmployees} clearEmployee={this.clearEmployee} />
          <div className="section-titles">Performance Reviews</div>
          <PerformanceReviewsContainer employees={employees} fetchEmployee={this.fetchEmployee} employee={employee} performanceReviews={employee.performance_reviews} />
        </div>
      );
    }
    return (
      <div className="employee-profile">
        nothing
      </div>
    );
  }
}

export default EmployeeProfile;
