import { createSlice } from "@reduxjs/toolkit";

const IncDec = createSlice({
  name: "Slice1",
  initialState: 0,
  reducers: {
    inc(state, action) {
      return state + action.payload;
    },
    dec(state, action) {
      return state - action.payload;
    },
  },
});

// export {IncDec};
export default IncDec.reducer;
export const { inc, dec } = IncDec.actions;
