// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/success.css";

function Success() {
  // const [successMessage, setSuccessMessage] = useState("");

  // useEffect(() => {
  //   const successMessageFromServer = async () => {
  //     try {
  //       const successResponse = await fetch(
  //         "http://localhost:3000/success"
  //       ).then((message) => {
  //         return message.json();
  //       });
  //       setSuccessMessage(successResponse);
  //       console.log(successMessage);
  //     } catch (error) {
  //       console.error("Did not receive success message", error);
  //     }
  //   };
  //   successMessageFromServer();
  // }, [successMessage]);
  return (
    <div className="successPage">
      <h1>Thank you very much for your purchase and support!</h1>
      <p>An email will be sent with your invoice and shipping details.</p>
      <p>
        You are now free to close the window or click <Link to={"/"}>here</Link>{" "}
        to return to the homepage
      </p>
    </div>
  );
}

export default Success;
