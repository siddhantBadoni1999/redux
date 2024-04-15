import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    deleteUser(state, action) {},
    cleatUser(state, action) {},
  },
});
console.log(userSlice.actions);
export default userSlice;
export const { addUser } = userSlice.actions;
