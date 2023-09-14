const initialState = 5;
const mulDiv = (state = initialState, action) => {
  switch (action.type) {
    case "mul":
      return state * action.acc;
    case "div":
      return state / action.acc;
    default:
      return state;
  }
};
export default mulDiv;
