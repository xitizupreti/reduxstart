import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from "./actions";

const App = () => {
  const myState = useSelector((state) => state.changeNum);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <div className="quantity">
          <button onClick={() => dispatch(dec())} title="dec">
            -
          </button>
          <input type="number" value={myState}></input>
          <button onClick={() => dispatch(inc(5))} title="inc">
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
