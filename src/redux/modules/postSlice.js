// src/redux/modules/todosSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  post: {},
  isLoading: true,
  error: null,
};

export const __getList = createAsyncThunk(
  "getList",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("https://test101.fly.dev/posts");
      console.log(data.data);
      // console.log(data.data.filter((comment) => comment.postId === payload));
      // 네트워크 요청이 성공한 경우 dispatch해주는 기능을 가진 API (Propmise가 resolved된 경우)
      return thunkAPI.fulfillWithValue(data.data); // 성공을 하면 fulfillWithValue에 의해 생성된 todos, getTodos, fullfilled라는 action이 dispatch되었다.
    } catch (error) {
      console.log(error);
      // 네트워크 요청이 실패한 경우 dispatch해주는 기능을 가진 API (Promise가 rejected된 경우)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postPost = createAsyncThunk(
  "postPost",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const dateId = new Date().toISOString();
      const newPost = { ...payload, id: dateId };
      console.log(newPost);
      await axios.post("https://test101.fly.dev/posts", newPost);
      return thunkAPI.fulfillWithValue(newPost);
    } catch (error) {
      console.log(error);
    }
  }
);

export const __patchPost = createAsyncThunk("patchPost", async (payload) => {
  try {
    await axios.put(`https://test101.fly.dev/posts/${payload[0]}`, payload[1]);
  } catch (error) {
    console.log(error);
  }
});

export const __getPost = createAsyncThunk(
  "getPost",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `https://test101.fly.dev/posts/${payload}`
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getList.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__getList.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.posts = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__getList.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

    [__postPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__postPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [__postPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {} = postSlice.actions;
export default postSlice.reducer;
