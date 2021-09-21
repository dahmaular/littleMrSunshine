import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "./Profile.css";
import Footer from "../Footer";
import { baseUrl } from "../Constant/ServerDetails";
import { PaystackButton } from "react-paystack";
// import NumericInput from "react-numeric-input";

export const Profile = (props) => {
  const vId = props.match.params.id;

  const [user, setUser] = useState(null);

  const publicKey = "pk_live_ef63841b477e3d79157630c2ba659cc08ba72f7e";

  const [quantity, setQuantity] = useState(30);
  const [btnAmount, setBtnAmount] = useState(1500);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const myArray = [
    "mgalaxyhosting@gmail.com",
    "favouritekere.tis@gmail.com",
    "joshpetersus@gmail.com",
    "bilbliss020@gmail.com",
    "watchbiblenow@gmail.com",
    "seebiblenow@gmail.com",
    "treasuregreat71@gmail.com",
    "preciouswealth106@gmail.com",
    "goddywengiemi@gmail.com",
    "erezimena.sfaith@gmail.com",
    "sunshinemiss2021@littlemisssunshine360.com",
    "littlemisssunshine2021@littlemisssunshine360.com",
    "misssunshinenija@littlemisssunshine360.com",
    "nijasunshinemiss21@littlemisssunshine360.com",
    "360nijasunshine21@littlemisssunshine360.com",
    "2021sunshinemiss@littlemisssunshine360.com",
    "alllittlesunshine11@littlemisssunshine360.com",
    "see21@littlemisssunshine360.com",
    "nija360@littlemisssunshine360.com",
    "contest@littlemisssunshine360.com",
    "winner360@littlemisssunshine360.com",
    "nijacontest@littlemisssunshine360.com",
    "new01@littlemisssunshine360.com",
    "classic1@littlemisssunshine360.com",
    "prefect10@littlemisssunshine360.com",
    "takeit@littlemisssunshine360.com",
    "from001@littlemisssunshine360.com",
    "who007@littlemisssunshine360.com",
    "001great@littlemisssunshine360.com",
    "Glory224@littlemisssunshine360.com",
  ];

  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  // console.log(randomItem);

  let num = Math.floor(Math.random() * 100);
  // console.log("Num", Math.floor(num));
  var email = num+randomItem;
  console.log("email", email);

  const decrease = () => {
    setQuantity(quantity - 1);
    //   setAmount();
  };

  const increase = () => {
    setQuantity(quantity + 1);
    // setAmount();
  };

  useEffect(() => {
    setAmount();
  }, [quantity]);

  const setAmount = () => {
    let amount = quantity * 50;
    setBtnAmount(amount);
  };

  const onChange = (e) => {
    setQuantity("");
    console.log(e.target.value);
    setQuantity(e.target.value);
  };

  const componentProps = {
    email: email,
    amount: btnAmount * 100,
    metadata: {
      name: user?.user?.childName,
      phone: user?.user?.parentNumber,
    },
    publicKey,
    text: "Pay " + btnAmount,

    onSuccess: function (response) {
      //   alert("Thanks for doing business with us! Come back soon!!");
      // console.log(response.status);
      if (response.status === "success") {
        voteUser();
      }
      handleShow();
    },
    onClose: () =>
      alert("Please! we need you to vote for this kid, don't go!!!!"),
  };

  const voteUser = async () => {
    try {
      await axios({
        method: "put",
        url: `${baseUrl}api/stage2/${vId}`,
        data: {
          votes: quantity,
          userId: user.user._id,
        },
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        // setUser(u.data);
        console.log(response);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  const fetchUser = async () => {
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/stage2/${vId}`,
        headers: { "Content-Type": "application/json" },
      }).then((u) => {
        setUser(u.data);
        // console.log(user);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="banner-container">
        <h1>VOTE</h1>
      </div>
      <div className="body-container">
        <div className="left-column">
          <img className="img" src={user?.user?.image} />
        </div>
        <div className="right-column">
          <h2>{user?.user?.childName}</h2>
          <h1>{user?.votes} Vote(s)</h1>
          <p>Age: {user?.user?.age}</p>
          <div className="payment">
            <div className="def-number-input number-input">
              <button onClick={() => decrease()} className="minus"></button>
              <input
                className="quantity"
                name="quantity"
                value={quantity}
                type="number"
                onChange={onChange}
              />
              <button onClick={() => increase()} className="plus"></button>
            </div>

            <PaystackButton className="paystack-button" {...componentProps} />
          </div>
          <div className="p-text">
            <p>
              If you are paying via Bank Transfers, you should ensure that
              Transfers are made through the Bank Details below. also, and in
              the description, kindly include the contestants full name.
            </p>
            <div className="bank">
              <p>Bank Name:</p> <p> Guarantee Trust Bank </p>
              <p>Account Number:</p><p> 0025487715 </p>
              <p>Account Name:</p><p> Skybearers Intl Nig. Ltd</p>
            </div>
          </div>
          <div className="p-text2">
            <p>
              Note: Send your payment receipt to the{" "}
              <a href="https://wa.me/message/JK5MG4SP7XZNJ1">
                WhatsApp number here
              </a>{" "}
              to validate your baby's vote.
            </p>
          </div>
        </div>
      </div>
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
            Little Miss Sunshine Contest 2021
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you. You have successfully voted.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
};
