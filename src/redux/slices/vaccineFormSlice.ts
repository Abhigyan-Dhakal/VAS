import { createSlice } from "@reduxjs/toolkit";

const vaccineFormSlice = createSlice({
  name: "vaccineForm",
  initialState: {
    data: {
      serviceName: "",
      siteLocation: "",
      startDate: "",
      endDate: "",
      doseType: "",
      duration: null,
      gender: "",
      age: "",
      ethnicity: "",
    },
  },
  reducers: {
    setVaccineData: (state: any, action) => {
      state.data = action.payload;
    },
  },
});

export const { setVaccineData } = vaccineFormSlice.actions;
export default vaccineFormSlice.reducer;
