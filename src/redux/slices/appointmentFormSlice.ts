import { createSlice } from "@reduxjs/toolkit";

const AppointmentFormSlice = createSlice({
  name: "appointmentForm",
  initialState: {
    data: {
      patientId: "",
      siteLocation: "",
      serviceType: "",
      confirmationCode: "",
    },
  },
  reducers: {
    setAppointmentData: (state: any, action) => {
      state.data = action.payload;
    },
  },
});

export const { setAppointmentData } = AppointmentFormSlice.actions;
export default AppointmentFormSlice.reducer;
