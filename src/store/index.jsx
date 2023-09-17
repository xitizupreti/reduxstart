import { configureStore } from "@reduxjs/toolkit";
import IncDec from "./slices/IncDec";
import MulDiv from "./slices/MulDiv";

const store = configureStore({
  reducer: {
    // IncDecstate:IncDec.reducer,
    // IncDecstate: IncDec.reducer,

    IncDecstate: IncDec,
    MulDivstate: MulDiv,
  },
});

export default store;
