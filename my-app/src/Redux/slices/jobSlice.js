// JobsSlice page

import { createSlice } from "@reduxjs/toolkit";
import { overallData } from './intialData';

const initialState = {
  overallData,
  userPassword: 'null',
  userName:'Enter your name' ,
  signName: '',
  signPassword: '',
  email: '',
  count: false,
  jobDetails: null,
  searchResult: [],
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJob: (state, action = {}) => {
      state.overallData = action.payload;
    },
    setUserName: (state, action = {}) => {
      state.userName = action.payload;
    },
    setUserPassword: (state, action = {}) => {
      state.userPassword = action.payload;
    },
    setSignName: (state, action = {}) => {
      state.signName = action.payload;
    },
    setSignPassword: (state, action = {}) => {
      state.signPassword = action.payload;
    },
    setEmail: (state, action = {}) => {
      state.email = action.payload;
    },
    handleCount: (state, action) => {
      state.count = action.payload;
    },
    setJobDetails: (state, action) => {
      state.jobDetails = action.payload;
    },
    setSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },

  },
});

export const {
  setJob,
  setUserName,
  setUserPassword,
  setSignName,
  setSignPassword,
  setEmail,
  handleCount,
  setJobDetails,
  setSearchResult
} = jobsSlice.actions;

export default jobsSlice.reducer;
