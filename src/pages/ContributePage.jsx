// ContributePage.jsx
import React from 'react';

const ContributePage = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <h2>Contribute Page</h2>
      <form>
        {/* Add your register form fields here */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        {/* Add more form fields as needed */}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default ContributePage;
