import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec } from "./store/slices/IncDec";
import { mul, div } from "./store/slices/MulDiv";

const App = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.IncDecstate;
  });
  const data2 = useSelector((state) => {
    return state.MulDivstate;
  });
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <div className="pad">
          <button onClick={() => dispatch(dec(1))}>-1</button>
          <input type="number" value={data}></input>
          <button onClick={() => dispatch(inc(5))}>+5</button>
        </div>

        <div className="pad">
          <button onClick={() => dispatch(div(5))}>/5</button>
          <input type="number" value={data2}></input>
          <button onClick={() => dispatch(mul(5))}>*5</button>
        </div>
      </div>
    </>
  );
};

export default App;
