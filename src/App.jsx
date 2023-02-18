import "./styles.css";
import COMPA from "./compA";
import { createContext } from "react";
import COMPB from "./compB";
const fname = createContext();
const lname = createContext();
// import COMPB from "./compB";
export default function App() {
  return (
    <div className="App">
      <fname.Provider value={"siddiqui"}>
        <COMPA />
      </fname.Provider>
      <lname.Provider value={"Adaab"}>
        <COMPB />
      </lname.Provider>
    </div>
  );
}
export { fname, lname };
