const initialState = 0;
const changeNum = (state = initialState, action) => {
  switch (action.type) {
    case "inc":
      return state + action.acc;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};
export default changeNum;
