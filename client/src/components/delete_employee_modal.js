import React from 'react';
import * as api from '../lib/api';

const DeleteEmployeeModal = ({ employee, fetchEmployees, clearEmployee, closeModal }) => {
  const deleteEmployee = () => {
    api.adminDeleteEmployee(employee.id)
      .then(() => {
        fetchEmployees();
        clearEmployee();
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div>Are you sure you want to delete this employee? All ongoing feedbacks that he/she is participating and performance reports that he/she belongs to will also be deleted</div>
      <div className="btns-container">
        <button className="btn btn-outline-dark" type="button" onClick={() => { deleteEmployee(); }}>Yes</button>
        <button className="btn btn-outline-dark" type="button" onClick={closeModal}>No</button>
      </div>
    </div>
  );
};

export default DeleteEmployeeModal;
