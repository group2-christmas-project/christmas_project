import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { HttpStatusCode } from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const __postPost = createAsyncThunk(
  "postsPost",
  async (payload, thunkAPI) => {
    try {
      const posting = await axios.post(`http://localhost:3001/posts`, payload);
      return thunkAPI.fulfillWithValue(posting.data);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/*export const __getPost = createAsyncThunk(
  "getTodo",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`http://localhost:3001/${category}/${id}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
);
*/
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducer: {},
  extraReducers: {
    [__postPost.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.push(action.payload); // 네트워크 요청이 끝났으니, false로 변경합니다.
      // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postPost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export default postsSlice.reducer;
