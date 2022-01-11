import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";
import "./Form.css";
import { Spinner } from "react-bootstrap";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";


const SignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors, 
    handleFileChnage, handleCheck, checked, isLoading, show,
   handleClose } = useForm(
    submitForm,
    validate
  );
  return (
    <>
    
    <div className="form-content-right">
      <form className="form" 
      // onSubmit={handleSubmit}
      >
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
        <div className="form-inputs">
        <input type="checkbox" name="agree" checked={checked}
          onChange={handleCheck} /> {' '}
          <label htmlFor="checkbox" className="form-label">
          I have read and agreed with the <a href="/terms">Terms and Conditions</a>
          </label>
          
          {errors.check && <p>{errors.check}</p>}
        </div>
        {/* { values.name === "" &&
          values.age === "" &&
          values.parentName === "" &&
          values.parentNumber === "" &&
          values.parentEmail === "" &&
          values.image === '' &&
          checked === true} */}
        {isLoading ? (
          <button color="primary" disabled>
                      <Spinner
                        as="span"
                        animation="border"
                        size="lg"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Loading...</span>
                    </button>
        ): (
           <button color="primary" className="form-input.btn"
          type="submit" disabled
          >
          Register
        </button>
        )}
        <span className="form-input-login">
                Registration is currently disabled!!!
            </span>
      </form>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Little Mister Sunshine Contest
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Your registration is completed successfully</Modal.Body>
        <Modal.Body>Kindly proceed to "Gallery" page to see details</Modal.Body>
        <Modal.Footer>
          <Link><Button variant="primary" onClick={handleClose}>
            Close
          </Button></Link>
          <Link className="width={'100%'}" to="/gallery"><Button variant="primary">View Gallery</Button></Link>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default SignUp;
