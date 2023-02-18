import React, { useContext } from "react";
// import {lname} from "./App.jsx"
import { lname } from "./App";
function COMPB() {
  const lastname = useContext(lname);

  return (
    <>
      <h1>{`comp B is ${lastname}`}</h1>
    </>
  );
}
export default COMPB;
