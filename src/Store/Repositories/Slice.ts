import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// const initialState: Users = {
//   repositories: [],
// };

export const repositorySlice = createSlice({
  name: "repos",
  initialState: [],
  reducers: {},
});
export const {} = repositorySlice.actions;
export default repositorySlice.reducer;
