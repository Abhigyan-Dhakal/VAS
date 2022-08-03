import { createSlice } from "@reduxjs/toolkit";

const registrationFormSlice = createSlice({
  name: "registrationForm",
  initialState: {
    data: {
      firstName: "",
      lastName: "",
      birthDate: null,
      ethnicity: "",
      gender: "",
      email: "",
      street: "",
      city: "",
      state: "",
      insuranceId: "",
      memberId: "",
      insuranceProvider: "",
    },
  },
  reducers: {
    setRegistrationData: (state: any, action) => {
      state.data = action.payload;
    },
  },
});

export const { setRegistrationData } = registrationFormSlice.actions;
export default registrationFormSlice.reducer;
