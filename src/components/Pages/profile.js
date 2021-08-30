import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Profile.css";
import Footer from "../Footer";
import { baseUrl } from "../Constant/ServerDetails";

export const Profile = (props) => {
  const vId = props.match.params.id;

  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      await axios({
        method: "get",
        url: `${baseUrl}api/votes/${vId}`,
        headers: { "Content-Type": "application/json" },
      }).then((u) => {
        setUser(u.data);
        // console.log(user);
      });
    } catch (error) {
      console.log("fetching data error", error);
    }
  };

  useEffect(async () => {
    await fetchUser();
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
          <div className="p-text">
            <p>
              If you are paying via Bank Transfers, you should ensure that
              Transfers are made through the Bank Details below. also, and in
              the description, kindly include the contestants unique number.
            </p>
            <p>Bank Name: Guarantee Trust Bank </p>
            <p>Account Number: 0025487715 Account</p>
            <p>Name: Skybearers Intl Nig. Ltd</p>
          </div>
          <div className="p-text2">
            <p>
              Note: Sometimes votes made via transfer have to wait 24 hours
              before it reflects.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
