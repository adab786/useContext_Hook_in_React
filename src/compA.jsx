import React, { useContext } from "react";
// import COMPB from "./compB";
import { fname } from "./App.jsx";
function COMPA() {
  const firstname = useContext(fname);
  // const lastname = useContext(lname)
  return (
    <>
      <h1>compnents A is {firstname}</h1>
    </>
  );
}
export default COMPA;
