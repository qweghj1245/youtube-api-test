import {
  GET_VIDEO_START,
  GET_VIDEO_SUCCESS,
  GET_VIDEO_FAILURE,
  PAGE_CHANGE,
} from './video.const';

export const getVideoStart = (query) => ({
  type: GET_VIDEO_START,
  payload: query,
});

export const getVideoSuccess = (response) => ({
  type: GET_VIDEO_SUCCESS,
  payload: response,
});

export const getVideoFailure = (error) => ({
  type: GET_VIDEO_FAILURE,
  payload: error,
});

export const pageChange = (token) => ({
  type: PAGE_CHANGE,
  payload: token,
});