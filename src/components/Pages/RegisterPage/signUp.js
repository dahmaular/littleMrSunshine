import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";

const SignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, handleFileChnage } = useForm(
    submitForm,
    validate
  );
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get started by filling your account today</h1>
        <div className="form-inputs">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-input"
            placeholder="Enter your child's name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            id="age"
            type="text"
            name="age"
            className="form-input"
            placeholder="Enter your child's age"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="parentName" className="form-label">
            Parent's Full Name
          </label>
          <input
            id="parentName"
            type="text"
            name="parentName"
            className="form-input"
            placeholder="Parent's Full Name"
            value={values.parentName}
            onChange={handleChange}
          />
          {errors.parentName && <p>{errors.parentName}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="parentNumber" className="form-label">
            Parent's Number
          </label>
          <input
            id="parentNumber"
            type="numeric"
            name="parentNumber"
            className="form-input"
            placeholder="Parent's Phone number"
            value={values.parentNumber}
            onChange={handleChange}
          />
          {errors.parentNumber && <p>{errors.parentNumber}</p>}
        </div>
        <div className="form-inputs">
          <label htmlFor="parentEmail" className="form-label">
            Parent's Email
          </label>
          <input
            id="parentEmail"
            type="email"
            name="parentEmail"
            className="form-input"
            placeholder="Parent's email"
            value={values.parentEmail}
            onChange={handleChange}
          />
          {errors.parentEmail && <p>{errors.parentEmail}</p>}
        </div>
        <div className="form-inputs mb-4">
          <label for="formFile" className="form-label">
            Upload child's image
          </label>
          <input className="form-control" type="file" id="image" name="image"
           value={values.image} onChange={handleFileChnage} />
        </div>

        <button color="primary" className="form-input.btn" type="submit">
          Register
        </button>
        {/* <span className="form-input-login">
                Already have an account? Login <a href="#">here</a>
            </span> */}
      </form>
    </div>
  );
};

export default SignUp;
