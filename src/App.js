import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { inc, dec, mul, div } from "./actions";

const App = () => {
  const myState = useSelector((state) => state.changeNum);
  const anoState = useSelector((state) => state.mulDiv);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <div className="pad">
          <button onClick={() => dispatch(dec())} title="dec">
            -1
          </button>
          <input type="number" value={myState}></input>
          <button onClick={() => dispatch(inc(5))} title="inc">
            +5
          </button>
        </div>

        <div className="pad">
          <button onClick={() => dispatch(div(5))} title="div">
            /5
          </button>
          <input type="number" value={anoState}></input>
          <button onClick={() => dispatch(mul(5))} title="mul">
            *5
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
