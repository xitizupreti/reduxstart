import { createSlice } from "@reduxjs/toolkit";

const MulDiv = createSlice({
  name: "Slice2",
  initialState: 1,
  reducers: {
    mul(state, action) {
      return state * action.payload;
    },
    div(state, action) {
      return state / action.payload;
    },
  },
  //   extraReducers(admin) {
  //     admin.addCase(MulDiv.actions.mul, () => {
  //       return state * action.payload;
  //     });
  //   },
});

// export {MulDiv};
export default MulDiv.reducer;
export const { mul, div } = MulDiv.actions;
