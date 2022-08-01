import { createSlice } from "@reduxjs/toolkit";

const PatientFormSlice = createSlice({
  name: "patientForm",
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
    setPatientData: (state: any, action) => {
      state.data = action.payload;
    },
  },
});

export const { setPatientData } = PatientFormSlice.actions;
export default PatientFormSlice.reducer;
