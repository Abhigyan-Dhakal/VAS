import { configureStore } from "@reduxjs/toolkit";
import appointmentFormReducer from "./slices/appointmentFormSlice";
import patientFormReducer from "./slices/patientFormSlice";
import registrationFormReducer from "./slices/registrationFormSlice";
import vaccineFormReducer from "./slices/vaccineFormSlice";

export const store = configureStore({
  reducer: {
    appointmentFormReducer,
    patientFormReducer,
    registrationFormReducer,
    vaccineFormReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
